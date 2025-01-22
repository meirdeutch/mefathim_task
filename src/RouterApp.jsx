import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayUsersPage from "./pages/DisplayUsersPage";
import LoginPage from "./pages/LoginPage";
import UserDetailsFormPage from "./pages/UsetDetailsFormPage";
import PrivateRoute from "./components/PrivateRoute";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/display-users" element={<PrivateRoute element={<DisplayUsersPage />} />} />
            <Route path="/user-form" element={<PrivateRoute element={<UserDetailsFormPage />} />} />
        </Routes>
    )
}
export default RouterApp;