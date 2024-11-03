import React from 'react';
import styles from './Main.css'; 
import Header from '../Header/Header';
import About from '../About/About';
import Delivery from '../Delivery/Delivery';
import MainProducts from '../mainProducts/mainProducts';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import firstPhoto from "./photo/scrollPhoto/firstPhoto.jpg"

const Main = () => (
<div className={styles.container}>
 
    <div className={styles.scrollPhotos}>
        <img  src={firstPhoto}></img>
    </div>
    <div>
        <MainProducts />
    </div>
    <div>
        <About />
    </div>
    <div>
        <Delivery />
    </div>

</div>
);

export default Main;