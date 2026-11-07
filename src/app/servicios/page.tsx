import { Boton } from "@/components/ui/Boton";
import { SubrayadoTitulo } from "@/components/ui/SubrayadoTitulo";
import styles from "./page.module.css";

const papeleriaCreativa = [
  "Gigantografías",
  "Letras 3D",
  "Toppers para torta",
  "Piñatas",
  "Carteles de bienvenida",
  "Centros de mesa",
  "Kits de emergencia/baño",
  "Souvenirs",
  "Stickers/calcos personalizados",
  "Banderines",
  "Toppers para cupcakes y toppers decorativos",
  "Cajitas y packaging personalizado",
  "Bolsitas golosineras",
  "Tags",
  "Golosinas personalizadas",
  "Tarjetas/tarjetitas personalizadas",
];

const graficaDigital = [
  "Invitaciones interactivas",
  "Invitaciones digitales estáticas o animadas",
  "Gráfica editable para bodas",
  "Kits gráficos/imprimibles",
];

const papeleriaFuncional = [
  "Agendas docentes",
  "Planners mensuales",
  "Cuadernos personalizados",
  "Calendarios",
  "Planillas de asistencia",
  "Organización y recordatorios",
];

const aplicacionesMarca = [
  "Stickers y etiquetas",
  "Packaging y cajitas",
  "Tags",
  "Tarjetas promocionales",
  "Cartelería",
  "Kits gráficos/físicos coordinados",
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
              Papelería creativa, gráfica digital y papelería funcional.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.seccionCreativa}
        aria-labelledby="titulo-papeleria-creativa"
      >
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion} id="titulo-papeleria-creativa">
            Papelería Creativa
            <SubrayadoTitulo />
          </h2>
          <ul className={styles.grillaProductos}>
            {papeleriaCreativa.map((producto) => (
              <li className={styles.producto} key={producto}>
                <span className={styles.nombreProducto}>{producto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.seccionDigital}
        aria-labelledby="titulo-grafica-digital"
      >
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion} id="titulo-grafica-digital">
            Gráfica Digital
            <SubrayadoTitulo />
          </h2>
          <ul className={styles.grillaProductos}>
            {graficaDigital.map((producto) => (
              <li className={styles.producto} key={producto}>
                <span className={styles.nombreProducto}>{producto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.seccionFuncional}
        aria-labelledby="titulo-papeleria-funcional"
      >
        <div className={styles.container}>
          <h2 className={styles.tituloSeccion} id="titulo-papeleria-funcional">
            Papelería Funcional
            <SubrayadoTitulo />
          </h2>
          <ul className={styles.grillaProductos}>
            {papeleriaFuncional.map((producto) => (
              <li className={styles.producto} key={producto}>
                <span className={styles.nombreProducto}>{producto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.seccionMarcas}
        aria-labelledby="titulo-marcas-emprendimientos"
      >
        <div className={styles.container}>
          <div>
            <h2
              className={styles.tituloSeccion}
              id="titulo-marcas-emprendimientos"
            >
              Marcas y emprendimientos
              <SubrayadoTitulo />
            </h2>
            <p className={styles.introduccionMarcas}>
              Aplicaciones de papelería y gráfica para marcas y emprendimientos.
            </p>
          </div>
          <ul className={styles.listaMarcas}>
            {aplicacionesMarca.map((aplicacion) => (
              <li className={styles.aplicacionMarca} key={aplicacion}>
                {aplicacion}
              </li>
            ))}
          </ul>
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
