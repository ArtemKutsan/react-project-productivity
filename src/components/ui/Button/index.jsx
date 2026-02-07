// src/components/Button/index.jsx
import styles from './Button.module.css';

const VARIANTS = {
  primary: styles.primary,
  primarySoft: styles.primarySoft,
  secondarySoft: styles.secondarySoft,
  outline: styles.outline,
};

export function Button({ variant = 'primary', className = '', ...props }) {
  return <button {...props} className={[styles.button, VARIANTS[variant], className].join(' ')} />;
}
