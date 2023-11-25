import { Navigate, Outlet } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';

const ProtectedRouteUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.role === 'USER' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouteUser;
