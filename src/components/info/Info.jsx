import styles from './style.module.css';

const Info = () => {
  return (
    <>
      <div className={styles.info_content}>
        <div className={styles.info}>
            <div className={styles.title}>адрес:</div>
            <div className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
        <div className={styles.vertical_line}></div>
        <div className={styles.info}>
            <div className={styles.title}>телефон:</div>
            <div className={styles.subTitle}>
                <span className={styles.tel}>8 (812) 123-45-67</span>
                <span className={styles.tel}>8-911-123-45-67</span>
            </div>
        </div>
        <div className={styles.vertical_line}></div>
        <div className={styles.info}>
            <div className={styles.title}>Режим работы:</div>
            <div className={styles.subTitle}>
                <span className={styles.work}>пн-пт : 10:00 - 20:00</span>
                <span className={styles.work}>сб-вск : 12:00 - 20:00</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Info
