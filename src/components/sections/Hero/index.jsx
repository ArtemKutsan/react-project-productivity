// src/components/Hero/index.jsx
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.heroBg}></div>
      <div className="container">
        <div className={`content ${styles.hero}`}>
          <p className="title uppercase text-sm font-bold">Plan your life</p>
          <h1 className={`title font-regular text-4xl ${styles.highlight}`}>
            Increase your <span className="font-semibold">productivity</span>
          </h1>
          <p className={styles.highlight} style={{ textAlign: 'center' }}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
            insolens gubergren similique est cu. Et vel modus congue vituperata.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
