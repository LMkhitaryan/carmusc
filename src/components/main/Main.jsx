import Footer from '../footer/Footer';
import Achievement from './achievement/Achievement';
import Carousel from './carousel/Carousel';
import Information from './information/Information';
import OurWorks from './ourworks/OurWorks';
import Services from './services/Services';
import styles from './style.module.css';

const Main = () => {
  return (
    <>
      <main className={styles.main_wrapper}>
            <Achievement/>
            <Carousel/>
            <Information/>
            <Services/>
            <OurWorks/>
            <Footer/>
      </main>
    </>
  )
}

export default Main
