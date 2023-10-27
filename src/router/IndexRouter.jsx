import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsPage, { getProducts } from '../pages/ProductsPage';
import { ItemDetailPage } from '../pages/ItemDetailPage';
import AdminPage from '../pages/AdminPage';
import CartPage from '../pages/CartPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/productos',
                children: [
                    {
                        path: '',
                        element: <ProductsPage />,
                        loader: getProducts,
                    },
                    {
                        path: ':id',
                        element: <ItemDetailPage />,
                        loader: getProducts,
                    },
                ],
            },
            {
                path: '/administrador',
                element: <AdminPage />,
            },
            {
                path: '/carrito',
                element: <CartPage />,
            },
        ],
    },
]);
