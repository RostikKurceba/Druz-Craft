import React from 'react';
import styles from './Login.css'; 
import { Link } from 'react-router-dom';

const Login = () => (
    <div className={styles.container}>
        <div>
            
            <h1 className={styles.title}>Реєстрація</h1>
            <input className={styles.email} placeholder='Email' type='email'></input>
            <input className={styles.password} placeholder='Password' type='password'></input>

            <Link to='/Main' className={styles.link}><button className={styles.button}>Увійти</button></Link>
        </div>
    </div>
);

export default Login;