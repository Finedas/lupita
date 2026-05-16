import styles from './Solution.module.css';

export default function Solution() {
  return (
    <section className={styles.solution} id="como">
      <div className={styles.container}>
        <div className={styles.eyebrow}>No vendemos un producto</div>
        <h2 className={styles.title}>
          Lo trabajamos <em>con vos.</em>
        </h2>
        <hr className={styles.rule} />
        <p className={styles.lede}>
          Identificar lo que duele, crear una solución a tu medida, y dejarte las herramientas para
          que sigas creando.
        </p>
        <div className={styles.note}>
          Las soluciones preconstruidas <strong>no se adecuan</strong> a todas las empresas — y
          quizás tampoco a la tuya. Por eso empezamos por escuchar.
        </div>
      </div>
    </section>
  );
}
