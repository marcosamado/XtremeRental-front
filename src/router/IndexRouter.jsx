import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsSnowPage from '../pages/ProductsSnowPage';
import ProductsWaterPage from '../pages/ProductsWaterPage';
import ProductsMountainPage, {
    getProducts,
} from '../pages/ProductsMountainPage';
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
                        path: 'nieve',
                        element: <ProductsSnowPage />,
                    },
                    {
                        path: 'acuaticos',
                        element: <ProductsWaterPage />,
                    },
                    {
                        path: 'montana',
                        element: <ProductsMountainPage />,
                        loader: getProducts,
                    },
                    {
                        path: ':id',
                        element: <ItemDetailPage />,
                        loader: getProducts
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
