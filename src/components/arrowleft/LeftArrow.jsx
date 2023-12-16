import styles from './style.module.css';

import LeftArrowIcon from '../main/carousel/images/dashicons_arrow-left.svg';

const LeftArrow = () => {
  return (
    <>
        <div className={styles.left}>
            <img src={LeftArrowIcon} alt="" />
        </div>
    </>
  )
}

export default LeftArrow
