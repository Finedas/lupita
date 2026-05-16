import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>El problema</div>
          <h2 className={styles.title}>
            Te dicen que hagas IA, pero <em>nadie te dice cómo.</em>
          </h2>
        </div>

        <div className={styles.statRow}>
          <div className={`${styles.stat} ${styles.a}`}>
            <div className={styles.num}>64%</div>
            <div className={styles.desc}>
              de los <strong>gerentes uruguayos</strong> siente que su empresa está preparada para
              incorporar IA.
            </div>
          </div>
          <div className={styles.vsDivider}>
            <span className={styles.line} />
            <span>vs</span>
            <span className={styles.line} />
          </div>
          <div className={`${styles.stat} ${styles.b}`}>
            <div className={styles.num}>6%</div>
            <div className={styles.desc}>
              está obteniendo un <strong>resultado real</strong> de aplicar IA.
            </div>
          </div>
        </div>

        <div className={styles.source}>
          Fuente: PwC Uruguay · 29.ª Encuesta Global a CEOs (Capítulo Uruguay, 2026).
        </div>
      </div>
    </section>
  );
}
