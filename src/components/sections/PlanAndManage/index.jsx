// src/components/PlanAndManage/index.jsx
import styles from './PlanAndManage.module.css';
import { Button } from '../../ui/Button';

function PlanAndManage() {
  return (
    <div className="container">
      <div className="content">
        <div className={styles.planAndManage}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: '1' }}>
            <h2 className="title uppercase text-base">DESKTOP AND MOBILE APP</h2>
            <p className={`title font-regular text-3xl ${styles.highlight}`}>
              <span className="font-semibold">Plan</span> and{' '}
              <span className="font-semibold">manage</span>
            </p>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
              insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque
              no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
            </p>

            <div>
              <Button
                variant="primary"
                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
              >
                View video
              </Button>
              <Button
                variant="outline"
                style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
              >
                See features
              </Button>
            </div>
          </div>

          <div style={{ flex: '1' }}>
            <img
              className="absolute"
              style={{ flex: '1', top: '0', right: '0', padding: '4rem 0' }}
              src="/images/plan-and-manage.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanAndManage;
