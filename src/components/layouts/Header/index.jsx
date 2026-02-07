// src/components/layouts/Header/index.jsx
import styles from './Header.module.css';
import { Button } from '../../ui/Button';
import Logo from '../../Logo';
import Navigation from '../../Navigation';
import Socials from '../../Socials';

export default function Header() {
  return (
    <header className={styles.header}>
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
    </header>
  );
}
