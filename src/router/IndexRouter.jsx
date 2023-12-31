import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

import HomePage from '../pages/HomePage';
import ProductsPage, { getProducts } from '../pages/ProductsPage';
import ItemDetailPage, { getProductById } from '../pages/ItemDetailPage';

import CartPage from '../pages/CartPage';
import LayoutAdmin from '../layouts/LayoutAdmin';
import ManageProductsPage from '../pages/ManageProductsPage';
import AddProductPage, { getSubCategories } from '../pages/AddProductPage';
import RegisterPage from '../pages/RegisterPage';
import ManageUsersPage, { getUsers } from '../pages/ManageUsersPage';
import ProtectedRoute from '../pages/ProtectedRoute';
import SearchedProductsPage from '../pages/SearchedProductsPage';
import UserProfilePage from '../pages/UserProfilePage';
import ProtectedRouteUser from '../pages/ProtectedRouteUser';

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
                    {
                        path: 'busqueda',
                        element: <SearchedProductsPage />,
                        loader: getSubCategories,
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
                                loader: getSubCategories,
                            },
                            {
                                path: 'usuarios',
                                element: <ManageUsersPage />,
                                loader: getUsers,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/',
                element: <ProtectedRouteUser />,
                children: [
                    {
                        path: '/usuario/:userName',
                        element: <UserProfilePage />,
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
