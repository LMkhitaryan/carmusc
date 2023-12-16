import React, { useState } from 'react';

import Figures from '../figures/Figures';
import styles from './style.module.css';

import Form from '../form/Form';


const Footer = () => {

   
    return (
        <>
        <footer style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '120px 0 0'}}>
            <div className={styles.footer_top}>
                <h2 className={styles.footer_top__title}>ответим на любой вопрос</h2>
                <Figures/>
            </div>
            <Form/>
            
        </footer> 
        </>
    )
    }

export default Footer
