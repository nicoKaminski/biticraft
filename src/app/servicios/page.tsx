import Image from "next/image";
import { Boton } from "@/components/ui/Boton";
import styles from "./page.module.css";

const productosFisicos = [
  {
    nombre: "Gigantografías",
    img: "https://placehold.co/600x400/FEFOD6/3c3c3b?text=Gigantografias",
  },
  {
    nombre: "Letras 3D",
    img: "https://placehold.co/600x400/c9cddf/3c3c3b?text=Letras+3D",
  },
  {
    nombre: "Toppers para Torta",
    img: "https://placehold.co/600x400/d4e7ce/3c3c3b?text=Toppers",
  },
  {
    nombre: "Piñatas",
    img: "https://placehold.co/600x400/f9cdcc/3c3c3b?text=Piñatas",
  },
  {
    nombre: "Carteles de Bienvenida",
    img: "https://placehold.co/600x400/e7d8e9/3c3c3b?text=Carteles",
  },
  {
    nombre: "Centros de Mesa",
    img: "https://placehold.co/600x400/cde8ec/3c3c3b?text=Centros+de+Mesa",
  },
  {
    nombre: "Kits de Emergencia/Baño",
    img: "https://placehold.co/600x400/FEFOD6/3c3c3b?text=Kits+Emergencia",
  },
  {
    nombre: "Souvenirs",
    img: "https://placehold.co/600x400/c9cddf/3c3c3b?text=Souvenirs",
  },
];

const papeleriaDigital = [
  {
    nombre: "Invitaciones Interactivas",
    img: "https://placehold.co/600x400/d4e7ce/3c3c3b?text=Invitaciones",
  },
  {
    nombre: "Gráfica Editable para Bodas",
    img: "https://placehold.co/600x400/f9cdcc/3c3c3b?text=Grafica+Bodas",
  },
  {
    nombre: "Kits Imprimibles",
    img: "https://placehold.co/600x400/e7d8e9/3c3c3b?text=Kits+Imprimibles",
  },
];

const papeleriaFuncional = [
  {
    nombre: "Agendas Docentes",
    descripcion: "Calendario anual, planner mensual, asistencia.",
    img: "https://placehold.co/600x400/cde8ec/3c3c3b?text=Agendas+Docentes",
  },
];

export default function PaginaServicios() {
  return (
    <div className={styles.pagina}>
      {/* Hero Servicios */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitulo}>
            Nuestros Servicios
          </h1>
          <p className={styles.heroDescripcion}>
            Todo lo que necesitas para tu evento, diseñado con amor y
            creatividad.
          </p>
        </div>
      </section>

      {/* Productos Físicos */}
      <section className={[styles.container, styles.seccionProductos].join(" ")}>
        <h2 className={[styles.tituloSeccion, styles.tituloRosa].join(" ")}>
          Productos Físicos
        </h2>
        <div className={styles.grillaFisicos}>
          {productosFisicos.map((producto) => (
            <div
              key={producto.nombre}
              className={styles.tarjetaFisico}
            >
              <div className={styles.imagenFisicoContenedor}>
                <Image
                  src={producto.img}
                  alt={producto.nombre}
                  fill
                  className={styles.imagenFisico}
                  unoptimized={true}
                />
              </div>
              <div className={styles.contenidoFisico}>
                <h3 className={styles.nombreFisico}>
                  {producto.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papelería Digital */}
      <section className={styles.seccionDigital}>
        <div className={styles.container}>
          <h2 className={[styles.tituloSeccion, styles.tituloVerde].join(" ")}>
            Papelería Digital
          </h2>
          <div className={styles.grillaDigital}>
            {papeleriaDigital.map((producto) => (
              <div
                key={producto.nombre}
                className={styles.tarjetaDigital}
              >
                <div className={styles.imagenDigitalContenedor}>
                  <Image
                    src={producto.img}
                    alt={producto.nombre}
                    fill
                    className={styles.imagenDigital}
                    unoptimized={true}
                  />
                </div>
                <h3 className={styles.tituloDigital}>
                  {producto.nombre}
                </h3>
                <p className={styles.descripcionDigital}>
                  Soluciones modernas y ecológicas para tu evento.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papelería Funcional */}
      <section className={[styles.container, styles.seccionFuncional].join(" ")}>
        <h2 className={[styles.tituloSeccion, styles.tituloCeleste].join(" ")}>
          Papelería Funcional
        </h2>
        <div className={styles.grillaFuncional}>
          <div className={styles.imagenFuncionalContenedor}>
            <Image
              src={papeleriaFuncional[0].img}
              alt={papeleriaFuncional[0].nombre}
              fill
              className={styles.imagenFuncional}
              unoptimized={true}
            />
          </div>
          <div>
            <h3 className={styles.tituloFuncional}>
              {papeleriaFuncional[0].nombre}
            </h3>
            <p className={styles.introFuncional}>
              Organización perfecta para tu año escolar. Incluye:
            </p>
            <ul className={styles.listaFuncional}>
              <li>Calendario Anual</li>
              <li>Planner Mensual</li>
              <li>Planillas de Asistencia</li>
              <li>Notas y Recordatorios</li>
            </ul>
            <Boton href="/contacto">¡La quiero!</Boton>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.seccionCta}>
        <div className={styles.container}>
          <h2 className={styles.tituloCta}>
            ¿No encontrás lo que buscás?
          </h2>
          <p className={styles.descripcionCta}>
            Recordá que todo es 100% personalizado. ¡Contanos tu idea!
          </p>
          <Boton href="/contacto">Contactar ahora</Boton>
        </div>
      </section>
    </div>
  );
}

