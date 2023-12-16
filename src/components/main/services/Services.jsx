import { useState } from 'react';

import Icon1 from '../images/icon1.svg';
import Icon3 from '../images/icon3.svg';
import Icon4 from '../images/icon4.svg';


import Figures from '../../figures/Figures';
import LeftArrow from '../../arrowleft/LeftArrow';
import RightArrow from '../../arrowright/RightArrow';
import styles from './style.module.css';
import Details from '../../details/Details';

const Services = () => {

    // const [active, setActive] = useState(false)

    // const isactive = () => {
    //     setActive(true)
    // }

  return (
    <>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.head_content}>
            <h2 className={styles.head_content__title}>Наши услуги</h2>
            <Figures/>
            <div className={styles.toggle_btn}>
                <button className={styles.active_btn}>Оклейка</button>
                <button className={styles.btn}>Детейлинг</button>
            </div>
        </div>
       <Details/>

       <div style={{padding: '0 0 260px'}}>
          <div className={styles.bottom_content}>
            
            <div style={{display: 'flex', flexDirection: 'column', width: '636px', rowGap: '50px'}}>
              <div className={styles.img}></div>
              <div style={{display: 'flex', justifyContent: 'space-between', gap: '35px'}}>
                <LeftArrow/>
                <p className={styles.car_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                <RightArrow/>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '526px', gap: '20px'}}>

              <div className={styles.wrapper}>
                <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                  <img src={Icon4} alt="Logo materials" />
                  <h2 className={styles.title}>100% полироль axem</h2>
                </div>
                <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
              </div>
              <Figures/>
              <div className={styles.wrapper}>
                <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                  <img src={Icon1} alt="Logo materials" />
                  <h2 className={styles.title}>выполняем работу четко по тз</h2>
                </div>
                <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus</p>
              </div>
              <Figures/>
              <div className={styles.wrapper}>
                <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                  <img src={Icon3} alt="Logo materials" />
                  <h2 className={styles.title}>у нас лучшие мастера</h2>
                </div>
                <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.</p>
              </div>
            </div>
          </div>
       </div>


      </section>
    </>
  )
}

export default Services
