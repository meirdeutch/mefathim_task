import React, { useState } from "react";
import { Button, Buttons, Form, Label, Input } from "./UserDetailsForm.style";
import { useNavigate } from "react-router-dom";
import { addUser, editUser } from "../../api/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useDispatch } from "react-redux";
import { logout } from "../../redux/loginStatus/loginStatusSlice";

const UserDetailsForm = ({ userDetails }) => {
    const editExistingUser = userDetails ? true : false;
    const [user, setUser] = useState({
        username: userDetails?.username || "",
        fullName: userDetails?.fullName || "",
        email: userDetails?.email || "",
        password: userDetails?.password || ""
    });
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser, [name]: value
        }));
    };
    const handleSaveChanges = async (e) => {
        e.preventDefault();
        const result = editExistingUser ? await editUser(userDetails._id, user, token) : await addUser(user, token);
        if (result.success) {
            toast.success(editExistingUser ? "User details have been successfully updated! " : "User successfully added", {
                position: "top-right",
                autoClose: 3000,  
                hideProgressBar: true,
              });
            navigate('/display-users')
        } else {
            toast.error(result.error, {
                position: "top-right",
                autoClose: 3000,  
                hideProgressBar: true,
              });
              if (result.error === "Unable to perform the operation, please log in again"){
                navigate('/');
                dispatch(logout())
              }
        }
    };
    const handleDeleteChanges = () => {
        setUser({
            username: "",
            fullName: "",
            email: "",
            password: ""
        });
        navigate('/display-users');
    };
    return (
        <Form onSubmit={handleSaveChanges}>
            <Label>User Name</Label>
            <Input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                required
            />
            <Label>Full Name</Label>
            <Input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleInputChange}
                required
            />
            <Label>Email</Label>
            <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
            />
            {!editExistingUser && (<><Label>Password</Label>
                <Input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    required
                /></>)}

            <Buttons>
                <Button type="submit">Save the changes</Button>
                <Button type="button" onClick={handleDeleteChanges}>Delete the changes</Button>
            </Buttons>
        </Form>
    );
}
export default UserDetailsForm;