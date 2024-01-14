import { useState } from 'react';

import Figures from '../figures/Figures';

import styles from './style.module.css';

import EmailIcon from '../footer/images/email_icon.svg';
import Youtubeicon from '../footer/images/youtube_icon.svg';
import MessageIcon from '../footer/images/message_icon.svg';
import VkontakteIcon from '../footer/images/vkontakte_icon.svg';
import Phoneicon from '../footer/images/phone_icon.svg';
import LocationIcon from '../footer/images/location_icon.svg';

const Form = () => {
  return (
    <>
        <div style={{padding: '60px 0 100px', width: '636px'}}>
                    <form action="">
                        <div style={{display: 'flex', justifyContent: 'space-between', gap: '24px'}}>
                            <input placeholder='Имя' className={`${styles.input} ${styles.name}`} type="text"/>
                            <input placeholder='телефон' className={`${styles.input} ${styles.tel}`} type="text"/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '25px 0'}}>
                            <textarea className={`${styles.input} ${styles.textarea}`} name="textarea" placeholder='Вопрос по дизайну, тюнингу и др.'></textarea>
                            <div style={{display: 'flex', flexDirection: 'column', rowGap: '15px'}}>
                                <div className={styles.social}>
                                    <img src={MessageIcon} alt="message" />
                                </div>
                                <div className={styles.social}>
                                    <img src={Youtubeicon} alt="youtube" />
                                </div>
                                <div className={styles.social}>
                                    <img src={VkontakteIcon} alt="vkontakte" />
                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className={styles.btn}>
                                <a href='' className={styles.btn_link}>отправить</a>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px'}}>
                                    <img src={LocationIcon} alt="geolocation" />
                                    <h3 className={styles.location_title}>Eu faucibus et rutrum fringilla orci nunc</h3>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px'}}>
                                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                                        <img src={Phoneicon} alt="phone" />
                                  <a className={styles.social_tel} href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                                        <img src={EmailIcon} alt="email" />
                                        <a className={styles.social_email} href="mailto:test@test.ru">test@test.ru</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
        </div>
        <div className={styles.footer_bottom}>
            <p className={styles.footer_bottom__text}>2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.</p>
            <ul className={styles.list}>
                <li><a className={styles.list_link} href="#">Главная</a></li>
                <li><a className={styles.list_link} href="#">Оклейка автомобилей</a></li>
                <li><a className={styles.list_link} href="#">Детейлинг автомобилей</a></li>
                <li><a className={styles.list_link} href="#">Галерея работ</a></li>
            </ul>
        </div>
    </>
  )
}

export default Form
