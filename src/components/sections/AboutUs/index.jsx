// src/components/AboutUs/index.jsx
import styles from './AboutUs.module.css';
import { Button } from '../../ui/Button';
import { Card } from '../../Card';
import { aboutCards } from './cardsData';

function AboutUs() {
  return (
    <div className="container">
      <div className="content">
        <div className={styles.about}>
          <div className={styles.header}>
            <h2 className="title text-sm uppercase font-bold">About Us</h2>
            <p className="title text-4xl">Read about our app</p>
          </div>

          <div className={styles.grid}>
            {aboutCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>

          <div className={styles.actions}>
            <Button variant="secondarySoft">Read more</Button>
            <span className="uppercase">or</span>
            <Button variant="primarySoft">Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
