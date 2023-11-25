import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.role === 'ADMIN' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
