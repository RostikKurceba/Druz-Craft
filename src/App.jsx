import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; 
import { BasketProvider } from './components/contexts/BasketContext';

const App = () => {
    return (
        <BasketProvider>
            <RouterProvider router={router} />
        </BasketProvider>
    );
};

export default App;
