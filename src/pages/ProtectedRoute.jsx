import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { userAdmin } = useContext(UserContext);
    return userAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
