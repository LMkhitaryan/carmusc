import Figures from '../../figures/Figures';
import styles from './style.module.css';

import Car1 from './images/work-car1.png';
import Car2 from './images/work-car2.png';
import Car3 from './images/work-car3.png';
import Car4 from './images/work-car4.png';
import Car5 from './images/work-car5.png';
import Car6 from './images/work-car6.png';

const OurWorks = () => {
  return (
    <>
      <section style={{paddingBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.top_content}>
            <h2 className={styles.top_content__title}>Наши работы</h2>
            <Figures/>
        </div>
        <div className={styles.bottom_content}>
            <div className={styles.cars}>
                <div>
                   <img src={Car1} alt="Car" /> 
                </div>
                <div>
                   <img src={Car2} alt="Car" /> 
                </div>
                <div>
                   <img src={Car3} alt="Car" /> 
                </div>
                <div>
                   <img src={Car4} alt="Car" /> 
                </div>
                <div>
                   <img src={Car5} alt="Car" /> 
                </div>
                <div>
                   <img src={Car6} alt="Car" /> 
                </div>           
            </div>
            <div className={styles.cars}>
                <div>
                   <img src={Car6} alt="Car" /> 
                </div>
                <div>
                   <img src={Car5} alt="Car" /> 
                </div>
                <div>
                   <img src={Car4} alt="Car" /> 
                </div>
                <div>
                   <img src={Car3} alt="Car" /> 
                </div>
                <div>
                   <img src={Car2} alt="Car" /> 
                </div>
                <div>
                   <img src={Car1} alt="Car" /> 
                </div>           
            </div>
            <div className={styles.cars}>
                <div>
                   <img src={Car1} alt="Car" /> 
                </div>
                <div>
                   <img src={Car2} alt="Car" /> 
                </div>
                <div>
                   <img src={Car3} alt="Car" /> 
                </div>
                <div>
                   <img src={Car4} alt="Car" /> 
                </div>
                <div>
                   <img src={Car5} alt="Car" /> 
                </div>
                <div>
                   <img src={Car6} alt="Car" /> 
                </div>           
            </div>
        </div>
      </section>
    </>
  )
}

export default OurWorks
