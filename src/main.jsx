import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/IndexRouter.jsx';

import { ThemeProvider } from '@material-tailwind/react';
import PageProvider from './context/pageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PageProvider>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </PageProvider>
    </React.StrictMode>,
);
