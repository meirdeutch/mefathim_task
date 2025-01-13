import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { LogoutButton, logoutText } from './Logout.style'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "../../redux/loginStatus/loginStatusSlice";
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedin = useSelector(selectIsLoggedIn)
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }
    return (
        <>
            {isLoggedin && (<LogoutButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <logoutText>Logout</logoutText>
            </LogoutButton>)}
        </>
    );
}
export default Logout;