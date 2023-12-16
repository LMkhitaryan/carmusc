import Figures from '../figures/Figures';
import Info from '../info/Info';
import Navigation from '../navigation/Navigation';
import styles from './style.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navigation/>
          <div className={styles.header_content}>
            <h1 className={styles.title}>car musc</h1>
            <Figures/>
            <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</p>
            <div className={styles.btn}>
              <a href='#' className={styles.link}>Наши услуги</a>
            </div>    
          </div>
        </div> 
        <Info/>
      </header>
    </>
  )
}

export default Header
