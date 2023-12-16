import styles from './style.module.css';

import Car1 from './images/carusell-car1.png';
import Car2 from './images/carusell-car2.png';
import Car3 from './images/carusell-car3.png';


import LeftArrow from '../../arrowleft/LeftArrow';
import RightArrow from '../../arrowright/RightArrow';


const Carousel = () => {

  return (
    <>
        <section style={{padding: '180px 0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.carousel_content}>
              <LeftArrow/>
              <div className={styles.carousel}>
                <div className={styles.car1}></div>
                <div className={styles.red_block}></div>
                <p className={styles.car_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit</p>
              </div>
              <div className={styles.carousel}>
                <div className={styles.car2}></div>
                <div className={styles.red_block}></div>
                <p className={styles.car_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit</p>
              </div>
              <div className={styles.carousel}>
                <div className={styles.car3}></div>
                <div className={styles.red_block}></div>
                <p className={styles.car_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit</p>
              </div>
              <RightArrow/>
            </div>
        </section> 
    </>
  )
}

export default Carousel
