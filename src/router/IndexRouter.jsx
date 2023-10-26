import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsSnowPage from '../pages/ProductsSnowPage';
import ProductsWaterPage from '../pages/ProductsWaterPage';
import ProductsMountainPage, {
    getProducts,
} from '../pages/ProductsMountainPage';
import ProductDetailPage from '../pages/ProductDetailPage';
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
                        path: 'montaña',
                        element: <ProductsMountainPage />,
                        loader: getProducts,
                    },
                    {
                        path: ':id',
                        element: <ProductDetailPage />,
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
