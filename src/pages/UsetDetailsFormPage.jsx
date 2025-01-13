import React from "react";
import UserDetailsForm from "../components/userDetailsForm/UserDetailsForm";
import { useLocation } from "react-router-dom";

const UserDetailsFormPage = () => {
    const location = useLocation();
    const {userDetails} = location.state || {};
    console.log(userDetails);
    return (
        <UserDetailsForm userDetails = {userDetails}/>
    );
}
export default UserDetailsFormPage;