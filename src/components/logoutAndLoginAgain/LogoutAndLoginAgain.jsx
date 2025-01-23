import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Text } from './LogoutAndLoginAgain.style'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "../../redux/loginStatus/loginStatusSlice";

const LogoutAndLoginAgain = () => {
    const location = useLocation()
    const isLoginPage = location.pathname == '/';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedin = useSelector(selectIsLoggedIn)
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }
    return (
        <>
            {!isLoginPage && (<Button onClick={handleLogout}>
                {isLoggedin ? (<><FontAwesomeIcon icon={faSignOutAlt} />
                <Text>Log out</Text></>) : (<><FontAwesomeIcon icon={faSignInAlt}/>
                <Text>Log in again</Text></>)}
            </Button>)}
        </>
    );
}
export default LogoutAndLoginAgain;