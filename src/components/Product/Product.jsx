import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.css';
import ProductBedroom2 from './photo/ProductBedroom2.jpg';
import ProductBathroom1 from './photo/ProductBathroom1.jpg';
import ProductLivingroom1 from './photo/ProductLivingroom1.jpg';
import ProductKitchen1 from './photo/ProductKitchen1.jpg';
import { useBasket } from '../contexts/BasketContext';

const Product = () => {
    const { category, productId } = useParams();
    const { addToBasket } = useBasket();

    const products = {
        Kitchen: [
            { id: 'Kitchen-1', src: ProductKitchen1, name: "Кухня 1" },
            { id: 'Kitchen-2', src: ProductKitchen1, name: "Кухня 2" },
        ],
        Livingroom: [
            { id: 'Livingroom-1', src: ProductLivingroom1, name: "Вітальня 1" },
            { id: 'Livingroom-2', src: ProductLivingroom1, name: "Вітальня 2" },
            { id: 'Livingroom-3', src: ProductLivingroom1, name: "Вітальня 3" },
        ],
        Bedroom: [
            { id: 'Bedroom-1', src: ProductBedroom2, name: "Спальня 1" },
            { id: 'Bedroom-2', src: ProductBedroom2, name: "Спальня 2" },
            { id: 'Bedroom-3', src: ProductBedroom2, name: "Спальня 3" },
        ],
        Bathroom: [
            { id: 'Bathroom-1', src: ProductBathroom1, name: "Ванна кімната 1" },
            { id: 'Bathroom-2', src: ProductBathroom1, name: "Ванна кімната 2" },
        ],
    };

    const product = products[category]?.find(prod => prod.id === `${category}-${productId}`);

    const handleAddToBasket = () => {
        if (product) {
            addToBasket({ id: product.id, name: product.name, src: product.src, category: category }); // Додаємо category
            alert(`${product.name} додано до кошика`);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerFirst}>
                <div className={styles.ProductsPhotos}>
                    {product ? (
                        <img className={styles.BigPhotoOfProduct} src={product.src} alt={product.name} />
                    ) : (
                        <p>Продукт не знайдено</p>
                    )}
                </div>

                <div className={styles.test}>
                    <div className={styles.productSettings}>
                        <h2 className={styles.ProductName}>{product?.name}</h2>
                        <p>Обрати колір</p>
                        <button className={styles.ProductButton}>Чорний</button>
                        <button className={styles.ProductButton}>Білий</button>
                        <button className={styles.ProductButton}>Сірий</button>
                        
                        <p>Обрати матеріал</p>
                        <button className={styles.ProductButton}>Дуб</button>
                        <button className={styles.ProductButton}>Ясінь</button>
                        <button className={styles.ProductButton}>Береза</button>
                        <button className={styles.ProductButton}>Сосна</button>
                    </div>

                    <div className={styles.buttonsForSafe}>
                        <button className={styles.basketButton} onClick={handleAddToBasket}>В кошик</button>
                        <button className={styles.BayButton}>Замовити</button>
                    </div>
                </div>
            </div>

            <div className={styles.ContainerSecond}>
                <h2 className={styles.DescriptionTitle}>Опис продукту</h2>
                <p className={styles.Description}>опис</p>
            </div>
        </div>
    );
};

export default Product;
s