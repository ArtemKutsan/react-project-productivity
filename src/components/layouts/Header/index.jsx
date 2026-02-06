// src/components/layouts/Header/index.jsx
import Navigation from '../../Navigation/Navigation';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span>Logo</span>

        <Navigation />

        {/* <Socials /> */}
        {/* <Button /> */}
      </div>
    </header>
  );
}
