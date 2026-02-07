// src/components/layouts/Footer/index.jsx
import styles from './Footer.module.css';
import { Button } from '../../ui/Button';
import Logo from '../../Logo';
import Navigation from '../../Navigation';
import Socials from '../../Socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <Logo />
          <Navigation />
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Socials />
          <Button variant="primarySoft">Get started</Button>
        </div>
      </div>
      <div className="container">
        <p style={{ paddingLeft: '5.5rem' }}>Copyright © 2026 by Artem Kutsan</p>
      </div>
    </footer>
  );
}
