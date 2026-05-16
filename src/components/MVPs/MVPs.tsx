import styles from './MVPs.module.css';

type Case = {
  tag: string;
  title: string;
  desc: string;
  highlight?: boolean;
  icon: React.ReactNode;
};

const CASES: Case[] = [
  {
    tag: 'Caso 01',
    title: 'Propuestas técnico-comerciales automatizadas',
    desc: 'Reutilización de 30 años de ofertas existentes.',
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h7M9 17h5" />
      </svg>
    ),
  },
  {
    tag: 'Caso 02',
    title: 'Gestión de conocimiento técnico',
    desc: 'RAG sobre el Drive de la empresa — respuestas instantáneas con fuentes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" />
      </svg>
    ),
  },
  {
    tag: 'Caso 03',
    title: 'Informes y PPTs de 100 – 150 páginas',
    desc: 'Generación automatizada con tu plantilla y tu data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M5 4h14v16H5z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    tag: 'Caso 04',
    title: 'Costeo por proyecto en tiempo real',
    desc: 'Procesamiento de horas y visibilidad financiera.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function MVPs() {
  return (
    <section className={styles.mvps} id="casos">
      <div className={styles.pad}>
        <div className={styles.eyebrow}>Qué construimos</div>
        <h2 className={styles.title}>
          Cosas <em>concretas</em>, no PowerPoints.
        </h2>
        <div className={styles.sub}>
          Ejemplos reales del primer POC en curso — ingeniería boutique uruguaya, 10 empleados,
          clientes Bunge / Cargill / ADM.
        </div>
      </div>

      <div className={styles.scroller}>
        {CASES.map((c) => (
          <article
            key={c.tag}
            className={`${styles.card} ${c.highlight ? styles.hl : ''}`}
          >
            <div className={styles.icon}>{c.icon}</div>
            <div className={styles.tag}>{c.tag}</div>
            <div className={styles.ttl}>{c.title}</div>
            <div className={styles.d}>{c.desc}</div>
          </article>
        ))}
      </div>

      <div className={styles.hint}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
        Deslizá para ver más
      </div>
    </section>
  );
}
