import React from 'react';
import { useBasket } from '../contexts/BasketContext'; 
import { Link } from 'react-router-dom'; 
import styles from './Basket.css';

const Basket = () => {
    const { basket, removeFromBasket } = useBasket(); 

    return (
        <div className={styles.container}>
            <h1 className={styles.basketTitle}>Ваш кошик</h1>
            <div className={styles.products}>
                {basket.map((product) => (
                    <div className={styles.savedProduct} key={product.id}>
                        <Link to={`/product/${product.category}/${product.id}`} className={styles.productLink}>
                            <img src={product.src} className={styles.productImg} alt={product.name} />
                            <p className={styles.productTitle}>{product.name}</p>
                        </Link>
                        <button onClick={() => removeFromBasket(product.id)}>Видалити</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Basket;
