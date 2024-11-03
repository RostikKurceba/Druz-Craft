import React from 'react';
import PropTypes from 'prop-types'; // Імпортуємо PropTypes
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);

// Додаємо валідацію для пропсів
Layout.propTypes = {
    children: PropTypes.node.isRequired, // children має бути обов'язковим і може бути будь-яким React-елементом
};

export default Layout;
