import Image from "next/image";
import {
  Bell,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  Gift,
  Heart,
  Layers3,
  ListChecks,
  MonitorSmartphone,
  NotebookPen,
  Package,
  PanelsTopLeft,
  Printer,
  Scissors,
  Sparkles,
  Tag,
  Tags,
} from "lucide-react";
import { Boton } from "@/components/ui/Boton";
import { SubrayadoTitulo } from "@/components/ui/SubrayadoTitulo";
import styles from "./page.module.css";

const papeleriaCreativa = [
  { nombre: "Gigantografías", Icono: Sparkles },
  { nombre: "Letras 3D", Icono: Sparkles },
  { nombre: "Toppers para torta", Icono: Gift },
  { nombre: "Piñatas", Icono: Gift },
  { nombre: "Carteles de bienvenida", Icono: Sparkles },
  { nombre: "Centros de mesa", Icono: Gift },
  { nombre: "Kits de emergencia/baño", Icono: Package },
  { nombre: "Souvenirs", Icono: Gift },
  { nombre: "Stickers/calcos personalizados", Icono: Tags },
  { nombre: "Banderines", Icono: Scissors },
  {
    nombre: "Toppers para cupcakes y toppers decorativos",
    Icono: Gift,
  },
  { nombre: "Cajitas y packaging personalizado", Icono: Package },
  { nombre: "Bolsitas golosineras", Icono: Package },
  { nombre: "Tags", Icono: Tags },
  { nombre: "Golosinas personalizadas", Icono: Gift },
  { nombre: "Tarjetas/tarjetitas personalizadas", Icono: CreditCard },
];

const graficaDigital = [
  {
    nombre: "Invitaciones interactivas",
    descripcion:
      "Una invitación dinámica para compartir cada detalle de tu evento.",
    Icono: MonitorSmartphone,
  },
  {
    nombre: "Invitaciones digitales estáticas o animadas",
    descripcion:
      "Diseños listos para enviar, con movimiento o en una pieza única.",
    Icono: Sparkles,
  },
  {
    nombre: "Gráfica editable para bodas",
    descripcion:
      "Piezas digitales pensadas para acompañar una misma identidad visual.",
    Icono: Heart,
  },
  {
    nombre: "Kits gráficos/imprimibles",
    descripcion:
      "Recursos coordinados para imprimir y personalizar tu celebración.",
    Icono: Printer,
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
  { nombre: "Stickers y etiquetas", Icono: Tags },
  { nombre: "Packaging y cajitas", Icono: Package },
  { nombre: "Tags", Icono: Tag },
  { nombre: "Tarjetas promocionales", Icono: CreditCard },
  { nombre: "Cartelería", Icono: PanelsTopLeft },
  { nombre: "Kits gráficos/físicos coordinados", Icono: Layers3 },
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
              <figcaption className={styles.pieCreativo}>
                Papelería para eventos
              </figcaption>
            </figure>

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
              <Image
                src="/home/servicios/grafica-digital.webp"
                alt="Invitación digital de boda presentada en un dispositivo."
                fill
                sizes="(min-width: 72rem) 34rem, (min-width: 48rem) 44vw, calc(100vw - 2rem)"
              />
              <figcaption className={styles.pieDigital}>
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

            <div className={styles.panelAgenda}>
              <div className={styles.encabezadoAgenda}>
                <h3 className={styles.tituloAgenda}>Un espacio para cada plan</h3>
                <span className={styles.notaAgenda}>Organización cotidiana</span>
              </div>
              <ul className={styles.listaFuncional}>
                {papeleriaFuncional.map(({ nombre, descripcion, Icono }) => (
                  <li className={styles.filaFuncional} key={nombre}>
                    <span className={styles.iconoFuncional} aria-hidden="true">
                      <Icono />
                    </span>
                    <div className={styles.contenidoFuncional}>
                      <h4 className={styles.nombreFuncional}>{nombre}</h4>
                      <p className={styles.descripcionFuncional}>
                        {descripcion}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
                Aplicaciones de papelería y gráfica para dar unidad a tu marca,
                negocio o emprendimiento.
              </p>
            </header>

            <ul className={styles.listaMarcas}>
              {aplicacionesMarca.map(({ nombre, Icono }) => (
                <li className={styles.aplicacionMarca} key={nombre}>
                  <Icono className={styles.iconoMarca} aria-hidden="true" />
                  <span className={styles.nombreMarca}>{nombre}</span>
                </li>
              ))}
            </ul>
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
