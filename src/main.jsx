import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/IndexRouter.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import UserProvider from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </UserProvider>
    </React.StrictMode>,
);
