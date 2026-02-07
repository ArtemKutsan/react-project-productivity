// src/components/Hero/index.jsx
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.heroBg}></div>

      <div
        className="content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlignLast: 'center',
          gap: '1rem',
        }}
      >
        <div className={styles.label}>PLAN YOUR LIFE</div>

        <h1 className={styles.title}>
          Increase your <span className={styles.highlight}>productivity</span>
        </h1>

        <p className={styles.description}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
          insolens gubergren similique est cu. Et vel modus congue vituperata.
        </p>
      </div>
    </>
  );
}

export default Hero;
