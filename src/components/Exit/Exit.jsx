import React from 'react';
import styles from './Exit.css'; 
import { Link } from 'react-router-dom';

const Exit = () => (
    <div className={styles.container}>
        <div>
            
            <h1 className={styles.title}>Вхід</h1>
            <input className={styles.email} placeholder='Email' type='email'></input>
            <input className={styles.password} placeholder='Password' type='password'></input>
            <Link to='/Main' className={styles.buttonLink}><button className={styles.button}>Увійти</button></Link>
            <Link to='/Login' className={styles.regestrationLink}><a className={styles.regestration} >Зареєструватися</a></Link>
        </div>
    </div>
);

export default Exit; 