import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsPage, { getProducts } from '../pages/ProductsPage';
import ItemDetailPage, { getProductById } from '../pages/ItemDetailPage';

import CartPage from '../pages/CartPage';
import LayoutAdmin from '../layouts/LayoutAdmin';
import ManageProductsPage from '../pages/ManageProductsPage';
import AddProductPage from '../pages/AddProductPage';

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
                        loader: ({ params }) => {
                            return getProductById(params.id);
                        },
                    },
                ],
            },
            {
                path: '/administrador',
                element: <LayoutAdmin />,
                children: [
                    {
                        index: true,
                        // path: 'productos',
                        element: <ManageProductsPage />,
                        loader: getProducts,
                    },
                    {
                        path: 'agregarproducto',
                        element: <AddProductPage />,
                        loader: getProducts,
                    },
                ],
            },
            {
                path: '/carrito',
                element: <CartPage />,
            },
        ],
    },
]);
