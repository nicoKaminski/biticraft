import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_ROOT = path.join(ROOT, "src");
const SOURCE_EXTENSIONS = new Set([
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);
const IGNORED_DIRECTORIES = new Set([
  ".next",
  "node_modules",
  "dist",
  "build",
  "coverage",
  "out",
]);
const GLOBALS_PATH = "src/app/globals.css";
const ALLOWED_WEIGHT_TOKENS = new Set([
  "var(--font-weight-light)",
  "var(--font-weight-regular)",
  "var(--font-weight-medium)",
]);
const ALLOWED_FAMILY_TOKENS = new Set([
  "var(--font-family-heading)",
  "var(--font-family-body)",
]);

const issues = [];

function report(relativePath, source, offset, message) {
  const before = source.slice(0, offset);
  const line = before.split("\n").length;
  const lastNewline = before.lastIndexOf("\n");
  const column = offset - lastNewline;
  issues.push(`${relativePath}:${line}:${column}: ${message}`);
}

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!IGNORED_DIRECTORIES.has(entry.name)) {
        files.push(...(await collectSourceFiles(path.join(directory, entry.name))));
      }
      continue;
    }

    if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(path.join(directory, entry.name));
    }
  }

  return files;
}

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, (comment) =>
    comment.replace(/[^\n]/g, " "),
  );
}

function normalizedValue(value) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function isInsideRootBlock(source, offset) {
  const rootBlocks = /:root\s*\{([^{}]*)\}/gi;
  for (const match of source.matchAll(rootBlocks)) {
    const contentStart = match.index + match[0].indexOf(match[1]);
    if (offset >= contentStart && offset <= contentStart + match[1].length) {
      return true;
    }
  }
  return false;
}

const tokenDefinitions = new Map([
  ["font-family-heading", '"times new roman", times, serif'],
  ["font-family-body", "var(--font-dm-sans)"],
  ["font-weight-light", "300"],
  ["font-weight-regular", "400"],
  ["font-weight-medium", "500"],
  ["font-size-body-lg", "1.125rem"],
  ["font-size-body", "1rem"],
  ["font-size-body-sm", "0.875rem"],
  ["font-size-display", "4rem"],
  ["font-size-display-mobile", "2.5rem"],
  ["font-size-page-title", "2.75rem"],
  ["font-size-page-title-mobile", "2.25rem"],
  ["font-size-section-title", "2.25rem"],
  ["font-size-section-title-mobile", "2rem"],
  ["font-size-card-title", "2rem"],
  ["font-size-card-title-mobile", "1.75rem"],
  ["font-size-product-title", "1.25rem"],
]);
const tokenCounts = new Map([...tokenDefinitions.keys()].map((name) => [name, 0]));

const files = (await collectSourceFiles(SOURCE_ROOT)).sort();
let expectedDMSansImportCount = 0;
let nextFontReferenceCount = 0;

for (const filePath of files) {
  const relativePath = path.relative(ROOT, filePath).replaceAll(path.sep, "/");
  const rawSource = await readFile(filePath, "utf8");
  const legacySizes = new RegExp(`--font-size-h[1-3](?:-mobile)?(?![\\w-])`, "g");
  for (const match of rawSource.matchAll(legacySizes)) {
    report(relativePath, rawSource, match.index, `el token anterior ${match[0]} ya no está autorizado.`);
  }
  const source = filePath.endsWith(".css") || filePath.endsWith(".scss") || filePath.endsWith(".sass") || filePath.endsWith(".less")
    ? stripCssComments(rawSource)
    : rawSource;
  const isCss = /\.(css|scss|sass|less)$/i.test(filePath);

  if (isCss) {
    const typographyTokenDeclarations = /--font-(?:family|weight|size)-[\w-]+\s*:/gi;
    for (const match of source.matchAll(typographyTokenDeclarations)) {
      if (relativePath !== GLOBALS_PATH || !isInsideRootBlock(source, match.index)) {
        report(relativePath, source, match.index, "los tokens tipográficos centrales solo pueden declararse en :root de src/app/globals.css.");
      }
    }

    for (const [tokenName, expectedValue] of tokenDefinitions) {
      const declaration = new RegExp(`--${tokenName}\\s*:\\s*([^;{}]+);`, "gi");
      for (const match of source.matchAll(declaration)) {
        tokenCounts.set(tokenName, tokenCounts.get(tokenName) + 1);
        const value = normalizedValue(match[1]);
        if (relativePath !== GLOBALS_PATH || !isInsideRootBlock(source, match.index)) {
          report(relativePath, source, match.index, `--${tokenName} debe definirse únicamente en :root de ${GLOBALS_PATH}.`);
        }
        if (value !== expectedValue) {
          report(relativePath, source, match.index, `--${tokenName} debe tener el valor central autorizado: ${expectedValue}.`);
        }
      }
    }

    const familyDeclarations = /(?<![-\w])font-family\s*:\s*([^;}]+)(?=;|})/gi;
    for (const match of source.matchAll(familyDeclarations)) {
      const value = normalizedValue(match[1]);
      if (relativePath !== GLOBALS_PATH) {
        report(relativePath, source, match.index, "font-family local está prohibido; el texto debe heredar del sistema global.");
      } else if (!ALLOWED_FAMILY_TOKENS.has(value)) {
        report(relativePath, source, match.index, "font-family global debe consumir var(--font-family-heading) o var(--font-family-body).");
      }
    }

    const weightDeclarations = /(?<![-\w])font-weight\s*:\s*([^;}]+)(?=;|})/gi;
    for (const match of source.matchAll(weightDeclarations)) {
      const value = normalizedValue(match[1]);
      if (!ALLOWED_WEIGHT_TOKENS.has(value)) {
        report(relativePath, source, match.index, "font-weight debe consumir uno de los tokens centrales Light, Regular o Medium.");
      }
    }

    const shorthandDeclarations = /(^|[;{}])\s*font\s*:/gim;
    for (const match of source.matchAll(shorthandDeclarations)) {
      report(relativePath, source, match.index + match[1].length, "el shorthand font está prohibido; usa las propiedades y tokens centrales por separado.");
    }

    const fontFaceRules = /@font-face\b/gi;
    for (const match of source.matchAll(fontFaceRules)) {
      report(relativePath, source, match.index, "@font-face no está autorizado; no se pueden incorporar archivos de fuente.");
    }

    const fontImports = /@import\s+[^;]*;/gi;
    for (const match of source.matchAll(fontImports)) {
      report(relativePath, source, match.index, "@import desde CSS no está autorizado; las fuentes deben seguir el sistema central.");
    }
  }

  if (/\.(ts|tsx|js|jsx|mjs|cjs)$/i.test(filePath)) {
    const inlineTypography = /\b(?:fontFamily|fontWeight|font)\s*(?:[:=])|\bfont-(?:family|weight)\s*:/g;
    for (const match of source.matchAll(inlineTypography)) {
      report(relativePath, source, match.index, "fontFamily, fontWeight y el shorthand font inline están prohibidos; usa el sistema tipográfico global.");
    }

    const nextFontReferences = [...source.matchAll(/next\/font\/(?:google|local)/g)];
    nextFontReferenceCount += nextFontReferences.length;
    const allowedImport = [...source.matchAll(/import\s*\{\s*DM_Sans\s*\}\s*from\s*(["'])next\/font\/google\1\s*;?/g)];
    expectedDMSansImportCount += allowedImport.length;

    for (const reference of nextFontReferences) {
      const isAllowed = relativePath === "src/app/layout.tsx" && allowedImport.some((match) =>
        reference.index >= match.index && reference.index < match.index + match[0].length,
      );
      if (!isAllowed) {
        report(relativePath, source, reference.index, "solo se permite importar DM Sans desde next/font/google en src/app/layout.tsx.");
      }
    }

    if (relativePath === "src/app/layout.tsx") {
      for (const match of allowedImport) {
        const call = source.slice(match.index + match[0].length).match(/\bDM_Sans\s*\(\s*\{([\s\S]*?)\}\s*\)/);
        if (!call) {
          report(relativePath, source, match.index, "la configuración de DM Sans debe declarar sus opciones explícitamente.");
          continue;
        }

        const configOffset = match.index + match[0].length + call.index;
        const variable = call[1].match(/\bvariable\s*:\s*(["'])(.*?)\1/);
        if (!variable || variable[2] !== "--font-dm-sans") {
          report(relativePath, source, configOffset, 'DM Sans debe exponer la variable CSS "--font-dm-sans".');
        }

        const weight = call[1].match(/\bweight\s*:\s*\[([^\]]*)\]/);
        const configuredWeights = weight
          ? [...weight[1].matchAll(/["']?(\d{3})["']?/g)].map((item) => item[1]).sort()
          : [];
        if (configuredWeights.join(",") !== "300,400,500") {
          report(relativePath, source, configOffset, "DM Sans debe cargar únicamente los pesos 300, 400 y 500.");
        }
      }
    }
  }
}

for (const [tokenName, count] of tokenCounts) {
  if (count !== 1) {
    issues.push(`${GLOBALS_PATH}: se esperaba una definición central de --${tokenName}, se encontraron ${count}.`);
  }
}

if (nextFontReferenceCount !== 1 || expectedDMSansImportCount !== 1) {
  issues.push(`src/app/layout.tsx: se esperaba una única importación de DM Sans desde next/font/google; referencias=${nextFontReferenceCount}, importaciones DM Sans válidas=${expectedDMSansImportCount}.`);
}

if (issues.length > 0) {
  console.error("Falló la validación tipográfica. Corrige estos puntos para cumplir el contrato global:\n");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("Validación tipográfica correcta: familias, pesos, imports y tokens de tamaño cumplen el contrato.");
}
