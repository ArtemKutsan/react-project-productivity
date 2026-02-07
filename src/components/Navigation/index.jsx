// src/components/layouts/header/Navigation.jsx
import styles from './Navigation.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Documentations' },
];

function Navigation() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className={styles.link}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
