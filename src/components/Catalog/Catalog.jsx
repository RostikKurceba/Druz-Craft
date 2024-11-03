import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Catalog.css';
import Bedroom2 from './photo/Bedroom2.jpg';
import Bathroom1 from './photo/Bathroom1.jpg';
import Kitchen1 from './photo/Kitchen1.jpg';
import Livingroom1 from './photo/Livingroom1.jpg';

const Catalog = () => {
    const { category } = useParams();

    const products = {
        Kitchen: [
            { id: 1, src: Kitchen1, name: "Кухня 1" },
            { id: 2, src: Kitchen1, name: "Кухня 2" }, 
        ],
        Livingroom: [
            { id: 1, src: Livingroom1, name: "Вітальня 1" },
            { id: 2, src: Livingroom1, name: "Вітальня 2" },
            { id: 3, src: Livingroom1, name: "Вітальня 3" }, 
        ],
        Bedroom: [
            { id: 1, src: Bedroom2, name: "Спальня 1" },
            { id: 2, src: Bedroom2, name: "Спальня 2" }, 
            { id: 3, src: Bedroom2, name: "Спальня 3" }, 
        ],
        Bathroom: [
            { id: 1, src: Bathroom1, name: "Ванна кімната 1" },
            { id: 2, src: Bathroom1, name: "Ванна кімната 2" }, 
        ],
    };

    const categoryTitles = {
        Kitchen: "Кухні",
        Livingroom: "Вітальні",
        Bedroom: "Спальні кімнати",
        Bathroom: "Ванні кімнати",
    };

    const categoryProducts = products[category] || [];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{categoryTitles[category] || category}</h1>
            <div className={styles.productsContainer}>
                {categoryProducts.map((product) => (
                    <Link 
                        to={`/product/${category}/${product.id}`} 
                        key={product.id} 
                        className={styles.productLink}
                    >
                        <div className={styles.productItem}>
                            <img 
                                className={styles.productImage} 
                                src={product.src} 
                                alt={product.name} 
                            />
                            <p className={styles.productName}>{product.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
