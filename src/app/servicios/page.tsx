import Image from "next/image";
import { Boton } from "@/components/ui/Boton";
import { SubrayadoTitulo } from "@/components/ui/SubrayadoTitulo";
import styles from "./page.module.css";

const papeleriaCreativa = [
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

const graficaDigital = [
  {
    nombre: "Invitaciones Interactivas",
    descripcion:
      "Una forma práctica y dinámica de compartir los detalles de tu evento en formato digital.",
    img: "https://placehold.co/600x400/d4e7ce/3c3c3b?text=Invitaciones",
  },
  {
    nombre: "Gráfica Editable para Bodas",
    descripcion:
      "Piezas digitales editables para mantener una identidad visual coherente en los distintos momentos de tu boda.",
    img: "https://placehold.co/600x400/f9cdcc/3c3c3b?text=Grafica+Bodas",
  },
  {
    nombre: "Kits Imprimibles",
    descripcion:
      "Diseños coordinados listos para imprimir y personalizar distintos detalles de tu celebración.",
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
            <SubrayadoTitulo />
          </h1>
          <div className={styles.heroDescripciones}>
            <p className={styles.heroDescripcion}>
              En Biticraft diseñamos y creamos piezas personalizadas para
              eventos, celebraciones, el día a día y marcas.
            </p>
            <p className={styles.heroDescripcion}>
              Combinamos papelería creativa, gráfica digital y soluciones
              funcionales para que cada propuesta tenga identidad propia y cada
              detalle acompañe lo que querés comunicar.
            </p>
          </div>
        </div>
      </section>

      {/* Papelería Creativa */}
      <section className={styles.seccionCreativa}>
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion}>
            Papelería Creativa
            <SubrayadoTitulo />
          </h2>
          <div className={styles.grillaCreativa}>
            {papeleriaCreativa.map((producto) => (
              <div
                key={producto.nombre}
                className={styles.tarjetaCreativa}
              >
                <div className={styles.imagenCreativaContenedor}>
                  <Image
                    src={producto.img}
                    alt={producto.nombre}
                    fill
                    className={styles.imagenCreativa}
                    unoptimized={true}
                  />
                </div>
                <div className={styles.contenidoCreativa}>
                  <h3 className={styles.nombreCreativa}>
                    {producto.nombre}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gráfica Digital */}
      <section className={styles.seccionDigital}>
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion}>
            Gráfica Digital
            <SubrayadoTitulo />
          </h2>
          <div className={styles.grillaDigital}>
            {graficaDigital.map((producto) => (
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
                  {producto.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papelería Funcional */}
      <section className={styles.seccionFuncional}>
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion}>
            Papelería Funcional
            <SubrayadoTitulo />
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
              <h3 className={styles.tituloFuncional}>Cuadernos personalizados</h3>
              <p className={styles.introFuncional}>
                Cuadernos diseñados a medida para acompañarte en el día a día,
                adaptados a tu estilo y necesidad.
              </p>
              <Boton variant="secondary" href="/contacto">
                Consultar
              </Boton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.seccionCta}>
        <div className={styles.container}>
          <h2 className={styles.tituloCta}>
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

