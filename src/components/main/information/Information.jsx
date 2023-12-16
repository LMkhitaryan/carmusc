import styles from './style.module.css';

import Figures from '../../figures/Figures';
import LeftArrow from '../../arrowleft/LeftArrow';
import RightArrow from '../../arrowright/RightArrow';
// import leftArrow from '../../arrowleft/LeftArrow';
// import RightArrow from '../../arrowright/RightArrow';

import Icon1 from '../images/icon1.svg';
import Icon2 from '../images/icon2.svg';
import Icon3 from '../images/icon3.svg';
import Icon4 from '../images/icon4.svg';


const Information = () => {
  return (
    <>
      <section style={{padding: '0 0 260px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.content}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '526px', gap: '20px'}}>

            <div className={styles.wrapper}>
              <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                <img src={Icon1} alt="Logo materials" />
                <h2 className={styles.title}>материалы от лучших компаний</h2>
              </div>
              <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
            </div>
            <Figures/>
            <div className={styles.wrapper}>
              <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                <img src={Icon2} alt="Logo materials" />
                <h2 className={styles.title}>Опытные мастера</h2>
              </div>
              <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus</p>
            </div>
            <Figures/>
            <div className={styles.wrapper}>
              <div style={{display: 'flex', alignItems: 'center', gap: '36.5px'}}>
                <img src={Icon3} alt="Logo materials" />
                <h2 className={styles.title}>Гарантия на все виды работы</h2>
              </div>
              <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.</p>
            </div>
          </div>


          <div style={{display: 'flex', flexDirection: 'column', width: '636px', rowGap: '50px'}}>
            <div className={styles.img}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '35px'}}>
              <LeftArrow/>
              <p className={styles.car_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
              <RightArrow/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Information
