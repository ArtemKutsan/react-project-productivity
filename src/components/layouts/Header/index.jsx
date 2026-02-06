// src/components/layouts/Header/index.jsx
import styles from './Header.module.css';
import Navigation from '../../Navigation';
import Logo from '../../Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />
        <Navigation />

        {/* <Socials /> */}
        {/* <Button /> */}
      </div>
    </header>
  );
}
