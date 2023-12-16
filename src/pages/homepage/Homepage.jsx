import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import styles from './style.module.css';

const Homepage = () => {
  return (
    <>
      <main className={styles.main}>
        <Header/>
        <Main/>
      </main>
    </>
  )
}

export default Homepage
