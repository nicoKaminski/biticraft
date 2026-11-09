import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  Bandage,
  Bell,
  Cake,
  CalendarCheck,
  CalendarDays,
  Candy,
  CreditCard,
  Flag,
  Flower2,
  Gift,
  Heart,
  Images,
  ListChecks,
  MonitorSmartphone,
  NotebookPen,
  PackageOpen,
  PanelsTopLeft,
  PartyPopper,
  Printer,
  Send,
  ShoppingBag,
  Sticker,
  Tag,
  Type,
  WandSparkles,
} from "lucide-react";
import { Boton } from "@/components/ui/Boton";
import { SubrayadoTitulo } from "@/components/ui/SubrayadoTitulo";
import styles from "./page.module.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const captionClass = `${styles.captionManuscrito} ${caveat.className}`;

const papeleriaCreativa = [
  { nombre: "Banderines", Icono: Flag },
  { nombre: "Bolsitas golosineras", Icono: ShoppingBag },
  { nombre: "Carteles de bienvenida", Icono: PanelsTopLeft },
  { nombre: "Centros de mesa", Icono: Flower2 },
  { nombre: "Gigantografías", Icono: Images },
  { nombre: "Golosinas personalizadas", Icono: Candy },
  { nombre: "Kits de emergencia", Icono: Bandage },
  { nombre: "Letras 3D", Icono: Type },
  { nombre: "Packaging personalizado", Icono: PackageOpen },
  { nombre: "Piñatas", Icono: PartyPopper },
  { nombre: "Souvenirs", Icono: Gift },
  { nombre: "Stickers personalizados", Icono: Sticker },
  { nombre: "Tags", Icono: Tag },
  { nombre: "Tarjetas personalizadas", Icono: CreditCard },
  { nombre: "Toppers decorativos", Icono: WandSparkles },
  { nombre: "Toppers para torta", Icono: Cake },
];

const graficaDigital = [
  {
    nombre: "Invitaciones digitales",
    descripcion:
      "Invitaciones interactivas, estáticas o animadas para compartir cada detalle de tu evento.",
    Icono: MonitorSmartphone,
  },
  {
    nombre: "Gráfica para bodas",
    descripcion:
      "Piezas digitales especiales para bodas con una identidad visual coherente.",
    Icono: Heart,
  },
  {
    nombre: "Kits imprimibles",
    descripcion:
      "Diseños coordinados listos para imprimir y personalizar tu celebración.",
    Icono: Printer,
  },
  {
    nombre: "Productos digitales",
    descripcion:
      "Agendas, planners y piezas digitales para organizar tus días y proyectos.",
    Icono: CalendarDays,
  },
];

const papeleriaFuncional = [
  {
    nombre: "Agendas docentes",
    descripcion: "Organizá el año escolar, laboral o personal.",
    Icono: CalendarDays,
  },
  {
    nombre: "Planners mensuales",
    descripcion: "Planificá tus metas, tareas y proyectos.",
    Icono: ListChecks,
  },
  {
    nombre: "Cuadernos personalizados",
    descripcion: "Diseños a medida para tus notas, ideas y estudio.",
    Icono: NotebookPen,
  },
  {
    nombre: "Calendarios",
    descripcion: "Visualizá las fechas importantes durante todo el año.",
    Icono: CalendarCheck,
  },
  {
    nombre: "Planillas de asistencia",
    descripcion: "Planillas prácticas para estudio, trabajo y gestión.",
    Icono: PanelsTopLeft,
  },
  {
    nombre: "Organización y recordatorios",
    descripcion: "Recursos simples para tener tus pendientes a la vista.",
    Icono: Bell,
  },
];

const aplicacionesMarca = [
  {
    nombre: "Stickers y etiquetas",
    imagen: "/servicios/marcas-emprendimientos/marcas-stickers-etiquetas.webp",
    alt: "Stickers y etiquetas personalizados para una marca",
  },
  {
    nombre: "Packaging",
    imagen: "/servicios/marcas-emprendimientos/marcas-packaging.webp",
    alt: "Packaging personalizado para una cafetería",
  },
  {
    nombre: "Tags",
    imagen: "/servicios/marcas-emprendimientos/marcas-tags.webp",
    alt: "Tags personalizados para una marca",
  },
  {
    nombre: "Tarjetas promocionales",
    imagen: "/servicios/marcas-emprendimientos/marcas-tarjetas-promocionales.webp",
    alt: "Tarjetas promocionales personalizadas",
  },
  {
    nombre: "Cartelería",
    imagen: "/servicios/marcas-emprendimientos/marcas-carteleria.webp",
    alt: "Vidriera ploteada con identidad visual de marca",
  },
  {
    nombre: "Kits coordinados",
    imagen: "/servicios/marcas-emprendimientos/marcas-kits-coordinados.webp",
    alt: "Kit coordinado de piezas gráficas para una marca",
  },
];

export default function PaginaServicios() {
  return (
    <div className={styles.pagina}>
      <section className={styles.hero} aria-labelledby="titulo-servicios">
        <div className={styles.container}>
          <div className={styles.heroContenido}>
            <h1 className={styles.heroTitulo} id="titulo-servicios">
              Nuestros Servicios
            </h1>
            <p className={styles.heroDescripcion}>
              Papelería creativa, gráfica digital y papelería funcional para
              acompañar tus ideas, proyectos y momentos más especiales.
            </p>
            <div className={styles.heroDivider} aria-hidden="true">
              <span className={styles.heroDividerLine} />
              <Send className={styles.heroPlane} />
              <span className={styles.heroDividerLine} />
            </div>
          </div>
        </div>
      </section>

      <nav
        className={styles.navegacionCategorias}
        aria-label="Categorías de servicios"
      >
        <div className={styles.container}>
          <ul className={styles.listaNavegacionCategorias}>
            <li>
              <a
                className={styles.enlaceCategoria}
                href="#titulo-papeleria-creativa"
              >
                Papelería Creativa
              </a>
            </li>
            <li>
              <a
                className={styles.enlaceCategoria}
                href="#titulo-grafica-digital"
              >
                Gráfica Digital
              </a>
            </li>
            <li>
              <a
                className={styles.enlaceCategoria}
                href="#titulo-papeleria-funcional"
              >
                Papelería Funcional
              </a>
            </li>
            <li>
              <a
                className={styles.enlaceCategoria}
                href="#titulo-marcas-emprendimientos"
              >
                Marcas y emprendimientos
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className={styles.seccionCreativa}
        aria-labelledby="titulo-papeleria-creativa"
      >
        <div className={styles.container}>
          <header className={styles.encabezadoCategoria}>
            <h2
              className={`${styles.tituloSeccion} ${styles.destinoAnchor}`}
              id="titulo-papeleria-creativa"
            >
              Papelería Creativa
              <SubrayadoTitulo />
            </h2>
            <p className={styles.introduccionSeccion}>
              Detalles únicos y personalizados para eventos, celebraciones y
              momentos especiales.
            </p>
          </header>

          <div className={styles.composicionCreativa}>
            <ul className={styles.listaCreativa}>
              {papeleriaCreativa.map(({ nombre, Icono }) => (
                <li className={styles.productoCreativo} key={nombre}>
                  <span className={styles.iconoProducto} aria-hidden="true">
                    <Icono />
                  </span>
                  <span>{nombre}</span>
                </li>
              ))}
            </ul>

            <div className={styles.galeriaCreativa}>
              <figure className={styles.polaroidCreativa}>
                <div className={styles.fotografiaCreativa}>
                  <Image
                    src="/servicios/papeleria-creativa/creativa-kit-emergencia.webp"
                    alt="Kit de emergencia para eventos con artículos de higiene y primeros auxilios."
                    fill
                    sizes="(min-width: 72rem) 18rem, (min-width: 64rem) calc(40vw - 10.75rem), (min-width: 36rem) calc(60vw - 3rem), calc(60vw - 3rem)"
                  />
                </div>
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Kit de emergencia
                </figcaption>
              </figure>

              <figure
                className={`${styles.piezaSecundaria} ${styles.piezaSecundariaVertical}`}
              >
                <div className={styles.fotografiaPinata}>
                  <Image
                    src="/servicios/papeleria-creativa/creativa-toppers-decorativos.webp"
                    alt="Toppers decorativos de flores, mariposa, moño y estrella en tonos pastel."
                    fill
                    sizes="(min-width: 72rem) 12rem, (min-width: 64rem) 10rem, (min-width: 48rem) 38vw, 34vw"
                  />
                </div>
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Toppers decorativos
                </figcaption>
              </figure>

              <figure
                className={`${styles.piezaSecundaria} ${styles.piezaSecundariaCompacta}`}
              >
                <div className={styles.fotografiaToppers}>
                  <Image
                    src="/servicios/papeleria-creativa/creativa-pinata.webp"
                    alt="Piñatas decorativas de tonos pastel en una mesa de celebración."
                    fill
                    sizes="(min-width: 72rem) 12rem, (min-width: 64rem) 10rem, (min-width: 48rem) 38vw, 34vw"
                  />
                </div>
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Piñatas
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.seccionDigital}
        aria-labelledby="titulo-grafica-digital"
      >
        <div className={styles.container}>
          <header className={styles.encabezadoCategoria}>
            <h2
              className={`${styles.tituloSeccion} ${styles.destinoAnchor}`}
              id="titulo-grafica-digital"
            >
              Gráfica Digital
              <SubrayadoTitulo />
            </h2>
            <p className={styles.introduccionSeccion}>
              Diseños editables y listos para usar, pensados para que
              personalices, imprimas o compartas con practicidad.
            </p>
          </header>

          <div className={styles.composicionDigital}>
            <figure className={styles.fotografiaDigital}>
              <div className={styles.marcoDigital}>
                <Image
                  src="/servicios/grafica-digital/digital-servicios.webp"
                  alt="Invitaciones digitales para quince años y boda presentadas en dos dispositivos."
                  fill
                  sizes="(min-width: 64rem) 23rem, (min-width: 36rem) calc(100vw - 3rem), calc(100vw - 2rem)"
                />
              </div>
              <figcaption
                className={`${styles.pieDigital} ${captionClass}`}
              >
                Invitaciones digitales
              </figcaption>
            </figure>

            <ul className={styles.modulosDigitales}>
              {graficaDigital.map(({ nombre, descripcion, Icono }) => (
                <li className={styles.moduloDigital} key={nombre}>
                  <span className={styles.iconoDigital} aria-hidden="true">
                    <Icono />
                  </span>
                  <div className={styles.contenidoDigital}>
                    <h3 className={styles.nombreDigital}>{nombre}</h3>
                    <p className={styles.descripcionDigital}>{descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.seccionFuncional}
        aria-labelledby="titulo-papeleria-funcional"
      >
        <div className={styles.container}>
          <header className={styles.encabezadoCategoria}>
            <h2
              className={`${styles.tituloSeccion} ${styles.destinoAnchor}`}
              id="titulo-papeleria-funcional"
            >
              Papelería Funcional
              <SubrayadoTitulo />
            </h2>
            <p className={styles.introduccionSeccion}>
              Organización, planificación y herramientas prácticas para tu día
              a día, tus estudios o tu trabajo.
            </p>
          </header>

          <div className={styles.composicionFuncional}>
            <figure className={styles.fotografiaFuncional}>
              <Image
                src="/servicios/papeleria-funcional/funcional-servicios.webp"
                alt="Agenda docente personalizada acompañada de elementos de escritorio."
                fill
                sizes="(min-width: 72rem) 33rem, (min-width: 64rem) 46vw, (min-width: 36rem) calc(100vw - 3rem), calc(100vw - 2rem)"
              />
              <figcaption className={styles.pieFuncional}>
                Herramientas para organizarte
              </figcaption>
            </figure>

            <ul className={styles.listaFuncional}>
              {papeleriaFuncional.map(({ nombre, descripcion, Icono }) => (
                <li className={styles.filaFuncional} key={nombre}>
                  <span className={styles.iconoFuncional} aria-hidden="true">
                    <Icono />
                  </span>
                  <div className={styles.contenidoFuncional}>
                    <h3 className={styles.nombreFuncional}>{nombre}</h3>
                    <p className={styles.descripcionFuncional}>{descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.seccionMarcas}
        aria-labelledby="titulo-marcas-emprendimientos"
      >
        <div className={styles.container}>
          <div className={styles.dossierMarcas}>
            <header className={styles.encabezadoMarcas}>
              <h2
                className={`${styles.tituloSeccion} ${styles.destinoAnchor}`}
                id="titulo-marcas-emprendimientos"
              >
                Marcas y emprendimientos
                <SubrayadoTitulo />
              </h2>
              <p className={styles.introduccionMarcas}>
                Papelería personalizada para potenciar la identidad de tu marca,
                negocio o emprendimiento.
              </p>
            </header>

            <div className={styles.detalleMarcas}>
              <div className={styles.galeriaMarcas}>
                {aplicacionesMarca.map(({ nombre, imagen, alt }) => (
                  <figure className={styles.piezaMarca} key={nombre}>
                    <div className={styles.visualMarca}>
                      <Image
                        src={imagen}
                        alt={alt}
                        fill
                        sizes="(min-width: 80rem) 8rem, (min-width: 64rem) calc(16vw + 3.5rem), (min-width: 36rem) calc((100vw - 4rem) / 3), (min-width: 22rem) calc((100vw - 3.5rem) / 3), calc((100vw - 2.5rem) / 2)"
                      />
                    </div>
                    <figcaption className={styles.captionMarca}>
                      {nombre}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.seccionCta} aria-labelledby="titulo-cta">
        <div className={styles.container}>
          <h2 className={styles.tituloCta} id="titulo-cta">
            ¿No encontrás lo que buscás?
            <SubrayadoTitulo align="center" />
          </h2>
          <p className={styles.descripcionCta}>
            Recordá que todo es 100% personalizado. ¡Contanos tu idea!
          </p>
          <Boton variant="primary" href="/contacto">
            Contactar ahora
          </Boton>
        </div>
      </section>
    </div>
  );
}
