import styles from './Pricing.module.css';

type Tier = {
  tag: string;
  name: string;
  pricePre: string;
  price: string;
  meta: string;
  body: React.ReactNode;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    tag: 'Tier 01',
    name: 'Diagnóstico',
    pricePre: 'USD',
    price: '0',
    meta: '45 min · sin compromiso',
    body: (
      <>
        Una llamada. Te decimos <strong>qué se puede hacer</strong> con IA en tu empresa — o que
        esperes 6 meses si no es el momento.
      </>
    ),
  },
  {
    tag: 'Tier 02',
    name: 'POC a medida',
    pricePre: 'USD',
    price: '3.000',
    meta: '4 – 6 semanas · alcance fijo',
    highlight: true,
    body: (
      <>
        Prototipo funcional con tus datos. <strong>Si no funciona, no pagás.</strong> Si funciona,
        pasamos a implementación.
      </>
    ),
  },
  {
    tag: 'Tier 03',
    name: 'Implementación',
    pricePre: 'desde',
    price: 'USD 6K',
    meta: 'Cotizado al cerrar el POC',
    body: (
      <>
        Despliegue, capacitación a tu equipo y entrega de prompts + stack.{' '}
        <strong>Te quedás autónomo.</strong>
      </>
    ),
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="precios">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Precios honestos</div>
          <h2 className={styles.title}>
            Sin retainer.
            <br />
            <em>Sin sorpresas.</em>
          </h2>
          <div className={styles.sub}>
            Empezás cuando te conviene. Pagás cuando hay algo que funciona.
          </div>
        </div>

        <div className={styles.list}>
          {TIERS.map((t) => (
            <article
              key={t.tag}
              className={`${styles.tier} ${t.highlight ? styles.hl : ''}`}
            >
              {t.highlight && <span className={styles.badge}>más elegido</span>}
              <div className={styles.tag}>{t.tag}</div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.price}>
                <span className={styles.pre}>{t.pricePre}</span>
                {t.price}
              </div>
              <div className={styles.meta}>{t.meta}</div>
              <div className={styles.d}>{t.body}</div>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          « <strong>Si no funciona, no pagás.</strong> Sin compromisos largos. »
        </div>
      </div>
    </section>
  );
}
