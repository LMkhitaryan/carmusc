import styles from './styles.module.css';

import Icon1 from '../main/images/icon1.svg';
import Icon2 from '../main/images/icon2.svg';
import Icon3 from '../main/images/icon3.svg';
import Icon4 from '../main/images/icon4.svg';

const Details = () => {
  return (
    <>
        <div className={styles.bottom_content}>

          <div className={styles.detail}>
            <img src={Icon4} className={styles.img} />
            <h2 className={styles.title}>Защитные пленки</h2>
            <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
            <div className={styles.btn}>
              <a href='#' className={styles.link}>Подробнее</a>
            </div>
          </div>
          <div className={styles.detail}>
            <img src={Icon1} className={styles.img} />
            <h2 className={styles.title}>Цветные пленки</h2>
            <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
            <div className={styles.btn}>
              <a href='#' className={styles.link}>Подробнее</a>
            </div>
          </div>
          <div className={styles.detail}>
            <img src={Icon2} className={styles.img} />
            <h2 className={styles.title}>Дизайн</h2>
            <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
            <div className={styles.btn}>
              <a href='#' className={styles.link}>Подробнее</a>
            </div>
          </div>
          <div className={styles.detail}>
            <img src={Icon3} className={styles.img} />
            <h2 className={styles.title}>Оклейка салона</h2>
            <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
            <div className={styles.btn}>
              <a href='#' className={styles.link}>Подробнее</a>
            </div>
          </div>
      
        </div>
    </>
  )
}

export default Details
