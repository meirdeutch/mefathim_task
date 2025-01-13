import React, { useState } from "react";
import { Button, Buttons, Form, Label, Input } from "./UserDetailsForm.style";
import { useNavigate } from "react-router-dom";
import { addUser, editUser } from "../../api/api";

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
            navigate('/display-users')
        } else {
            alert(result.error)
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
                <Button type="submit">Seva the changes</Button>
                <Button type="button" onClick={handleDeleteChanges}>Delete the changes</Button>
            </Buttons>
        </Form>
    );
}
export default UserDetailsForm;