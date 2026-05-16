import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.appbar}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.dot} />
          lupita
        </a>
        <nav className={styles.nav}>
          <a href="#como">Cómo</a>
          <a href="#casos">Casos</a>
          <a href="#precios">Precios</a>
          <a href="#equipo">Equipo</a>
        </nav>
        <a href="#contacto" className={styles.cta}>
          Agendar
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M3 6h6M7 3l3 3-3 3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
