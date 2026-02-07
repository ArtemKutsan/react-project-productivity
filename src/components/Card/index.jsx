// src/components/Card/index.jsx
import styles from './Card.module.css';

export function Card({ icon, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
