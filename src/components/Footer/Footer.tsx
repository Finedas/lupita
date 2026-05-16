import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.mark}>lupita</span>
        AI con lupa, construida con vos.
        <br />
        Montevideo · Uruguay · <a href="mailto:hola@lupita.uy">hola@lupita.uy</a>
        <br />
        © 2026 — Blanco · Finozzi · Pérez
      </div>
    </footer>
  );
}
