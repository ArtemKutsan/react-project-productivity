// src/components/Customers/index.jsx
import styles from './Customers.module.css';

const customers = [
  { src: '/images/apple-watch.svg', alt: 'Apple Watch' },
  { src: '/images/atlassian.svg', alt: 'Atlassian' },
  { src: '/images/audi.svg', alt: 'Audi' },
  { src: '/images/bitbucket.svg', alt: 'Bitbucket' },
  { src: '/images/facebook.svg', alt: 'Facebook' },
];

export default function Customers() {
  return (
    <div className="content">
      <div className={styles.customers}>
        {customers.map((customer) => (
          <div key={customer.src} className={styles.logoItem}>
            <img src={customer.src} alt={customer.alt} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
