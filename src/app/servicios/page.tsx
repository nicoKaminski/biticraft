import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  Bell,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  Gift,
  Heart,
  ListChecks,
  MonitorSmartphone,
  NotebookPen,
  Package,
  PanelsTopLeft,
  Printer,
  Scissors,
  Send,
  Sparkles,
  Tags,
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
  { nombre: "Banderines", Icono: Scissors },
  { nombre: "Bolsitas golosineras", Icono: Package },
  { nombre: "Carteles de bienvenida", Icono: Sparkles },
  { nombre: "Centros de mesa", Icono: Gift },
  { nombre: "Gigantografías", Icono: Sparkles },
  { nombre: "Golosinas personalizadas", Icono: Gift },
  { nombre: "Kits de emergencia/baño", Icono: Package },
  { nombre: "Letras 3D", Icono: Sparkles },
  { nombre: "Packaging personalizado", Icono: Package },
  { nombre: "Piñatas", Icono: Gift },
  { nombre: "Souvenirs", Icono: Gift },
  { nombre: "Stickers personalizados", Icono: Tags },
  { nombre: "Tags", Icono: Tags },
  { nombre: "Tarjetas personalizadas", Icono: CreditCard },
  { nombre: "Toppers decorativos", Icono: Gift },
  { nombre: "Toppers para torta", Icono: Gift },
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
  "Stickers / Etiquetas",
  "Packaging",
  "Tags",
  "Tarjetas promocionales",
  "Cartelería",
  "Kits coordinados",
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

      <section
        className={styles.seccionCreativa}
        aria-labelledby="titulo-papeleria-creativa"
      >
        <div className={styles.container}>
          <header className={styles.encabezadoCategoria}>
            <h2
              className={styles.tituloSeccion}
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
                    src="/home/servicios/papeleria-creativa.webp"
                    alt="Papelería para eventos con una letra 3D, un cartel de bienvenida, una cajita y un topper."
                    fill
                    sizes="(min-width: 72rem) 31rem, (min-width: 48rem) 42vw, calc(100vw - 2rem)"
                    priority
                  />
                </div>
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Papelería para eventos
                </figcaption>
              </figure>

              <figure
                className={`${styles.piezaSecundaria} ${styles.piezaSecundariaVertical}`}
              >
                <div
                  className={styles.placeholderPieza}
                  role="img"
                  aria-label="Espacio visual reservado para una futura fotografía de piñatas"
                />
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Piñatas
                </figcaption>
              </figure>

              <figure
                className={`${styles.piezaSecundaria} ${styles.piezaSecundariaCompacta}`}
              >
                <div
                  className={styles.placeholderPieza}
                  role="img"
                  aria-label="Espacio visual reservado para una futura fotografía de toppers decorativos"
                />
                <figcaption
                  className={`${styles.pieCreativo} ${captionClass}`}
                >
                  Toppers decorativos
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
            <h2 className={styles.tituloSeccion} id="titulo-grafica-digital">
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
                  src="/home/servicios/grafica-digital.webp"
                  alt="Invitación digital de boda presentada en un dispositivo."
                  fill
                  sizes="(min-width: 72rem) 34rem, (min-width: 48rem) 44vw, calc(100vw - 2rem)"
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
              className={styles.tituloSeccion}
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
                src="/home/servicios/papeleria-funcional.webp"
                alt="Agenda personalizada acompañada de elementos de escritorio."
                fill
                sizes="(min-width: 72rem) 35rem, (min-width: 48rem) 46vw, calc(100vw - 2rem)"
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
                className={styles.tituloSeccion}
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
                {aplicacionesMarca.map((nombre) => (
                  <figure className={styles.piezaMarca} key={nombre}>
                    <div
                      className={`${styles.visualMarca} ${styles.placeholderPieza}`}
                      role="img"
                      aria-label={`Espacio visual reservado para una futura fotografía de ${nombre}`}
                    />
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
