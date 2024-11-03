import React from 'react';
import styles from './Footer.css';
import LogoFooter from './photo/logoFooter.png';
import Instagram from './photo/instagram.png';
import Facebook from './photo/facebook.png';
import WhatsApp from './photo/whatssup.png';

const Footer = () => (
    <footer className={styles.container}>
        
        <img src={LogoFooter} alt="Логотип" className={styles.logo} />

        <div className={styles.contactsContainer}>
            <h2 className={styles.contactsTitle}>Контакти</h2>
            <div className={styles.contacts}>
                <p className={styles.number}>+380 (12) 345 67 89</p>
                <p className={styles.numberReserve}>+380 (12) 345 67 89</p>
                <p className={styles.email}>druzcraft.ua@gmail.com</p>
            </div>
        </div>

        <div className={styles.socialMediaContainer}>
            <div className={styles.instagramContainer}>
                <p className={styles.instagramTitle}>Druz_Craft.ua</p>
                <div className='img-container'>
                    <img className={styles.instagramImg} src={Instagram} alt="Instagram" />
                </div>
            </div>
            <div className={styles.facebookContainer}>
                <p className={styles.facebookTitle}>Druz_Craft.ua</p>
                <div className='img-container'>
                    <img className={styles.facebookImg} src={Facebook} alt="Facebook" />
                </div>
            </div>
            <div className={styles.whatsAppContainer}>
                <p className={styles.whatsAppTitle}>+380 (12) 345 67 89</p>
                <div className='img-container'>
                    <img className={styles.whatsAppImg} src={WhatsApp} alt="WhatsApp" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
