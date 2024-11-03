import React from 'react';
import styles from './Delivery.css';
import DeliveryPhoto from './photo/DeliveryPhoto.png';

const Delivery = () => (
    <div className={styles.container}>
        <img className={styles.deliveryImg} src={DeliveryPhoto} alt="Доставка" />

        <div className={styles.deliveryText}>
            <h1 className={styles.title}>Доставка</h1>

            <div className={styles.deliveryInformation}>
                <h2 className={styles.deliveryH2}>Доставка Новою Поштою</h2>
                <p className={styles.deliveryP}>Ви можете обрати зручний для вас спосіб:</p>
                <ul className={styles.deliveryList}>
                    <li>Доставка до відділення</li>
                    <li>Доставка до поштомату</li>
                    <li>Кур'єрська доставка</li>
                </ul>
                <p className={styles.deliveryP}>Відправка товарів відбувається протягом 1-2 днів після підтвердження вашого замовлення.</p>

                <h2 className={styles.deliveryH2}>Варіанти оплати</h2>
                <ul className={styles.deliveryList}>
                    <li>Карткою</li>
                    <li>По реквізитах</li>
                    <li>Післяплата</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Delivery;
