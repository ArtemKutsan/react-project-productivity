// src/components/Socials/index.jsx
import styles from './Socials.module.css';

const socials = [
  { src: '/icons/facebook.svg', alt: 'Facebook logo' },
  { src: '/icons/telegram.svg', alt: 'Telegram logo' },
  { src: '/icons/twitter.svg', alt: 'Twitter logo' },
  { src: '/icons/media.svg', alt: 'Media logo' },
];

function Socials() {
  return (
    <div className={styles.socials}>
      {socials.map((item) => (
        <div key={item.src} className={styles.logoItem}>
          <img src={item.src} alt={item.alt} className={styles.logo} />
        </div>
      ))}
    </div>
  );
}

export default Socials;
