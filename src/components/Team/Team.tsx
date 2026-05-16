import styles from './Team.module.css';

type Member = {
  initials: string;
  name: string;
  role: React.ReactNode;
  pill: string;
};

const MEMBERS: Member[] = [
  {
    initials: 'NF',
    name: 'Nicolás Finozzi',
    role: (
      <>
        <strong>Ing. Eléctrico</strong> · Product · Fintech · Medtech
      </>
    ),
    pill: 'Producto + canales',
  },
  {
    initials: 'PB',
    name: 'Pablo Blanco',
    role: (
      <>
        <strong>Economista</strong> · AI aplicada · B2B · Estrategia
      </>
    ),
    pill: 'Comercial B2B',
  },
  {
    initials: 'AP',
    name: 'Agustín Pérez',
    role: (
      <>
        <strong>Contador</strong> · Finanzas · Consultoría · Tax
      </>
    ),
    pill: 'Financiero',
  },
];

export default function Team() {
  return (
    <section className={styles.team} id="equipo">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Quiénes somos</div>
          <h2 className={styles.title}>
            Tres MBA del IEEM.
            <br />
            <em>Brazo ejecutor.</em>
          </h2>
        </div>

        <div className={styles.list}>
          {MEMBERS.map((m) => (
            <article key={m.initials} className={styles.member}>
              <div className={styles.avatar}>{m.initials}</div>
              <div className={styles.body}>
                <div className={styles.nm}>{m.name}</div>
                <div className={styles.role}>{m.role}</div>
                <span className={styles.pill}>{m.pill}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
