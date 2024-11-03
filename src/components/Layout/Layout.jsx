import React from 'react';
import PropTypes from 'prop-types'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default Layout;
