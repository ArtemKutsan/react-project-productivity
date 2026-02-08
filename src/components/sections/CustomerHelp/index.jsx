// src/components/CustomerHelp/index.jsx
import { useState } from 'react';
import styles from './CustomerHelp.module.css';
import { Button } from '../../ui/Button';
import { frequentlyAskedQuestions } from './questions';

function CustomerHelp() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <div className="content">
        <div className={styles.customerHelp}>
          <div className={styles.header}>
            <h2 className="title text-sm uppercase font-bold">Customer help</h2>
            <p className="title text-4xl">Frequently asked questions</p>
          </div>

          <div className={styles.faq}>
            {frequentlyAskedQuestions.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className={styles.item}>
                  <button className={styles.question} onClick={() => toggle(item.id)}>
                    {item.question}
                  </button>

                  {isOpen && item.answer && (
                    <div className={styles.answer}>
                      <p>{item.answer}</p>

                      {item.hasButton && (
                        <Button className={styles.docButton}>Go to documentation</Button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHelp;
