import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsPage, { getProducts } from '../pages/ProductsPage';
import ItemDetailPage, { getProductById } from '../pages/ItemDetailPage';

import CartPage from '../pages/CartPage';
import LayoutAdmin from '../layouts/LayoutAdmin';
import ManageProductsPage from '../pages/ManageProductsPage';
import AddProductPage from '../pages/AddProductPage';
import RegisterPage from '../pages/RegisterPage';
import ManageUsersPage from '../pages/ManageUsersPage';
import ProtectedRoute from '../pages/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: getProducts,
            },
            {
                path: '/productos',
                children: [
                    {
                        index: true,
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
                path: '/',
                element: <ProtectedRoute />,
                children: [
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
                            {
                                path: 'usuarios',
                                element: <ManageUsersPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/carrito',
                element: <CartPage />,
            },
            {
                path: '/registro',
                element: <RegisterPage />,
            },
        ],
    },
]);
