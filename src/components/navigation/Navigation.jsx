import styles from './style.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="#">Главная</a>
            </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="#">Оклейка автомобилей</a>
            </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="#">Детейлинг автомобилей</a>
          </li>
          <li className={styles.nav_list__item}>
            <a className={styles.nav_list__link} href="#">Галерея работ</a>
          </li>
        </ul>
        <div className={styles.menu_burger}>
          <div className={styles.burger_child1}></div>
          <div className={styles.burger_child2}></div>
          <div className={styles.burger_child3}></div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
