import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta} id="contacto">
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.eyebrow}>Empezá hoy</div>
          <h2 className={styles.title}>
            45 minutos. <em>Cero humo.</em>
          </h2>
          <p className={styles.lede}>
            Una llamada honesta. Si la IA no te sirve, te lo decimos — y no nos volvés a escuchar.
          </p>
          <div className={styles.actions}>
            <a
              href="https://wa.me/59899000000?text=Hola%20Lupita%2C%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico"
              className={`${styles.btn} ${styles.primary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3.5A10.5 10.5 0 0 0 3 18l-1.5 5 5.2-1.4A10.5 10.5 0 1 0 20.5 3.5zm-8.5 17a8.5 8.5 0 0 1-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.5 8.5 0 1 1 12 20.5zm4.8-6.4c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1-1.2-.4-2.2-1.3a8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s.1-.4 0-.5-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 12 12 0 0 0 4.6 4 5 5 0 0 0 3 .6c.6-.1 1.6-.7 1.8-1.3s.2-1.1.2-1.3-.3-.2-.6-.3z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <a
              href="mailto:hola@lupita.uy?subject=Diagn%C3%B3stico%20Lupita"
              className={`${styles.btn} ${styles.ghost}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M3 6h18v12H3z" />
                <path d="M3 7l9 7 9-7" />
              </svg>
              hola@lupita.uy
            </a>
          </div>

          <div className={styles.promises}>
            <div className={styles.promise}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                Respondemos en <strong>menos de 24 hs</strong>
              </span>
            </div>
            <div className={styles.promise}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span>
                Diagnóstico <strong>sin costo ni compromiso</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
