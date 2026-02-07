// src/components/AboutUs/index.jsx
import styles from './AboutUs.module.css';
import { Button } from '../../ui/Button';
import { Card } from '../../Card';
import { aboutCards } from './cardsData';

function AboutUs() {
  return (
    <div className="content">
      <div className={styles.about}>
        <div className={styles.header}>
          <h2 className={styles.title}>ABOUT US</h2>
          <p className={styles.subtitle}>Read about our app.</p>
        </div>

        <div className={styles.grid}>
          {aboutCards.map((card) => (
            <Card key={card.id} icon={card.icon} title={card.title} text={card.text} />
          ))}
        </div>

        <div className={styles.actions}>
          <Button variant="secondarySoft">Read more</Button>
          <span className={styles.or}>OR</span>
          <Button variant="primarySoft">Get started</Button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
