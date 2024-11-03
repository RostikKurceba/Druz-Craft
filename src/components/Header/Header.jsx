import React from 'react'; 
import styles from './Header.css';
import HeaderImages from './photo/Logo/logo.png';
import HeaderSearch from './photo/Search/search.png';
import HeaderBasket from './photo/Basket/basket.png';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className={styles.container}>
        <div className={styles.headerLinks}>
            <Link to='/main' className={styles.mainProductsLink}>
                <img src={HeaderImages} className={styles.logo} alt="Логотип" />
            </Link>
            <nav className={styles.headerText}>
                <Link to='/products' className={styles.products}>Товари</Link>
                <Link to='/idea' className={styles.idea}>Твоя ідея</Link>
                <Link to='/about' className={styles.about}>Про нас</Link>
                <Link to='/delivery' className={styles.delivery}>Доставка</Link>
            </nav>

            <a href=''>
                <img src={HeaderSearch} className={styles.search} alt="Пошук" />
            </a>
            <Link to='/basket' className={styles.basket}>
                <img src={HeaderBasket}  alt="Кошик" />
            </Link>
        </div>
        <div className={styles.headerLine}></div>
    </header>
);

export default Header;
