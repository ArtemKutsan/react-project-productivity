// src/components/Hero/index.jsx
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.heroBg}></div>
      <div className="container">
        <div className={`content ${styles.hero}`}>
          <h1 className="title uppercase text-base">Plan your life</h1>
          <h2 className={`title font-regular text-3xl ${styles.highlight}`}>
            Increase your <span className="font-semibold">productivity</span>
          </h2>
          <p className={styles.highlight}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
            insolens gubergren similique est cu. Et vel modus congue vituperata.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
