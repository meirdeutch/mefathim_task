import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/loginStatus/loginStatusSlice';

const PrivateRoute = ({ element}) => {
    const token = useSelector(selectToken);
        if (!token) {
            return <Navigate to="/" replace />;
        }
    return element;
}
export default PrivateRoute