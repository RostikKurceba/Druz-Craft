// src/components/MainProducts/MainProducts.jsx
import React from 'react';
import styles from './mainProducts.css';
import { Link } from 'react-router-dom';
import Bedroom from './photo/Bedroom.jpg';
import Livingroom from './photo/Livingroom.jpg';
import Kitchen from './photo/Kitchen.jpg';
import Bathroom from './photo/Bathroom.jpg';

const MainProducts = () => (
    <div className={styles.container}>
        <h1 className={styles.productsTitle}>Товари</h1>

        <div className={styles.products}> 
            <Link to='/catalog/Bedroom' className={styles.mainProductsLink}>
                <div className={styles.productItem}>
                    <img className={styles.bedroom} src={Bedroom} alt="Спальня" />
                    <p className={styles.productName}>Спальні кімнати</p>
                </div>
            </Link>
            <Link to='/catalog/Livingroom' className={styles.mainProductsLink}>
                <div className={styles.productItem}>
                    <img className={styles.livingroom} src={Livingroom} alt="Вітальня" />
                    <p className={styles.productName}>Вітальні</p>
                </div>
            </Link>
            <Link to='/catalog/Kitchen' className={styles.mainProductsLink}>
                <div className={styles.productItem}>
                    <img className={styles.kitchen} src={Kitchen} alt="Кухня" />
                    <p className={styles.productName}>Кухні</p>
                </div>
            </Link>
            <Link to='/catalog/Bathroom' className={styles.mainProductsLink}>
                <div className={styles.productItem}>
                    <img className={styles.bathroom} src={Bathroom} alt="Ванна кімната" />
                    <p className={styles.productName}>Ванні кімнати</p>
                </div>
            </Link>
        </div>
    </div>
);

export default MainProducts;
