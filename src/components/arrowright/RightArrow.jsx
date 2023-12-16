import styles from './style.module.css';

import RightArrowIcon from '../main/carousel/images/dashicons_arrow-right.svg';

const RightArrow = () => {
  return (
    <div>
        <div className={styles.right}>
            <img src={RightArrowIcon} alt="" />
        </div>
    </div>
  )
}

export default RightArrow
