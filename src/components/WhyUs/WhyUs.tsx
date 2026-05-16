import styles from './WhyUs.module.css';

const REASONS: React.ReactNode[] = [
  <><strong>Diseñado específicamente</strong> para tu PyME — no plantilla, no genérico.</>,
  <>Solo pagás <strong>al cerrar el alcance</strong>. Sin suscripción mensual obligatoria.</>,
  <>Acompañamiento <strong>end-to-end</strong> con los 3 founders. No con un junior con plantilla.</>,
  <>Tu equipo aprende y se queda <strong>autónomo</strong>. Después no dependés de nosotros.</>,
  <>Si no funciona, <strong>no pagás</strong>. Sin compromisos largos.</>,
];

export default function WhyUs() {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Por qué Lupita</div>
          <h2 className={styles.title}>
            Ni un SaaS genérico, ni un proyecto <em>de USD 50K.</em>
          </h2>
        </div>
        <ul className={styles.list}>
          {REASONS.map((r, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.check}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path d="M5 12l5 5 9-11" />
                </svg>
              </span>
              <div>{r}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
