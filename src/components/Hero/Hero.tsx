import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.eyebrow}>Boutique AI · Montevideo</div>
          <div className={styles.megamark}>lupita</div>
          <h1 className={styles.tagline}>
            AI con lupa,
            <br />
            <em>construida junto a vos.</em>
          </h1>
          <p className={styles.lede}>
            Consultoría e implementación de <strong>IA aplicada</strong> para PyMEs uruguayas. No
            un curso enlatado. No una multinacional con PowerPoint genérico.
          </p>
          <div className={styles.actions}>
            <a href="#contacto" className={`${styles.btn} ${styles.primary}`}>
              Agendá tu diagnóstico
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 7h8M7 3l4 4-4 4" />
              </svg>
            </a>
            <a href="#como" className={`${styles.btn} ${styles.ghost}`}>
              Cómo trabajamos
            </a>
          </div>
        </div>

        <div className={styles.mascotWrap} aria-hidden="true">
          <div className={styles.halo} />
          <img className={styles.mascot} src="/mascot.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
