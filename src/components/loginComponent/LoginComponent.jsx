import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputField, Label } from "./LoginComponent.style";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginStatus/loginStatusSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const LoginComponent = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await loginUser(username, password);
        if (result.success){
            dispatch(login({token: result.data.token}))
            toast.success("You have successfully connected", {
                position: "top-right",
                autoClose: 3000,  
                hideProgressBar: true,
              });
            navigate("/display-users");
        } else {
            toast.error(result.error, {
                position: "top-right",
                autoClose: 3000,  
                hideProgressBar: true,
              });
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
                <Label>Name: </Label>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <Label>Password: </Label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            <Button type="submit" >Login</Button>
        </Form>
    );
}
export default LoginComponent;