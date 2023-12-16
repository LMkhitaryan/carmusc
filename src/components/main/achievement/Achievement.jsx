import Figures from '../../figures/Figures';
import styles from './style.module.css';

import Cup from '../images/cup.svg';

const Achievement = () => {
  return (
    <>
      <section style={{padding: '0 312px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.content}>
            <div className={styles.content_left__side}>
                <h2 className={styles.content_title}>наши достижения от кубка россии до чемпионатов мира</h2>
                <Figures/>
                <p className={styles.content_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.</p>
            </div>
            
            <div className={styles.content_right__side}>
                <div className={styles.left_side}>
                    <div className={styles.count}>
                        <span className={styles.number}>#1</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>#6</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>#2</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>#1</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>  
                </div>
                <div className={styles.right_side}>
                    <div className={styles.count}>
                        <span className={styles.number}>#4</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>#3</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>#1</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>
                    <div className={styles.count}>
                        <img src={Cup} alt='Cup'></img>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui</span>
                    </div>  
                </div>
            </div>
        </div>  
      </section>
    </>
  )
}

export default Achievement
