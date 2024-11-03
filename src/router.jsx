// src/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Exit from "./components/Exit/Exit"; 
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Layout from "./components/Layout/Layout"; 
import Basket from "./components/Basket/Basket";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound"; // Додайте цей імпорт

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Main /></Layout>, //Exit
    },
    {
        path: '/login',
        element: <Layout><Login /></Layout>
    },
    {
        path: '/about',
        element: <Layout><About /></Layout>
    },
    {
        path: '/catalog',
        element: <Layout><Catalog /></Layout>
    },
    {
        path: '/catalog/:category',
        element: <Layout><Catalog /></Layout>
    },
    {
        path: '/main',
        element: <Layout><Main /></Layout>
    },
    {
        path: '/basket',
        element: <Layout><Basket /></Layout>
    },
    {
        path: '/product/:category/:productId',
        element: <Layout><Product /></Layout>
    },
    {
        path: '*', 
        element: <NotFound />
    },
]);
