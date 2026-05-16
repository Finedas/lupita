import styles from './Process.module.css';

type Step = {
  num: string;
  title: string;
  meta: string;
  body: React.ReactNode;
  highlight?: boolean;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Diagnóstico',
    meta: '45 minutos · gratis',
    body: (
      <>
        Te escuchamos, identificamos los puntos de dolor concretos y te decimos si{' '}
        <strong>la IA puede ayudar</strong> — o si no es el momento.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'POC a medida',
    meta: '4 – 6 semanas',
    highlight: true,
    body: (
      <>
        Construimos un prototipo funcional con <strong>tus datos</strong>, en tu flujo, validado
        por tu equipo. Solo pagás al cerrar el alcance.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 12a9 9 0 0 1 9-9v9h9a9 9 0 1 1-18 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Implementación',
    meta: 'Tu equipo, autónomo',
    body: (
      <>
        Lo dejamos andando y <strong>te capacitamos</strong> para que sigas creando vos. Sin
        retainer obligatorio.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 18l4-4 3 3 5-6 6 6" />
        <path d="M4 21h17" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Cómo trabajamos</div>
          <h2 className={styles.title}>
            Tres pasos. <em>Sin compromiso largo.</em>
          </h2>
        </div>
        <div className={styles.list}>
          {STEPS.map((s) => (
            <article
              key={s.num}
              className={`${styles.step} ${s.highlight ? styles.hl : ''}`}
            >
              <div className={styles.icon}>{s.icon}</div>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.ttl}>{s.title}</div>
              <div className={styles.meta}>{s.meta}</div>
              <div className={styles.d}>{s.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
