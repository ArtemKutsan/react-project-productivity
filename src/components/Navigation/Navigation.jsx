// src/components/layouts/header/Navigation.jsx
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.link}>
        Home
      </a>
      <a href="/blog" className={styles.link}>
        Blog
      </a>
      <a href="/features" className={styles.link}>
        Features
      </a>
      <a href="/pricing" className={styles.link}>
        Pricing
      </a>
      <a href="/docs" className={styles.link}>
        Documentations
      </a>
    </nav>
  );
}
