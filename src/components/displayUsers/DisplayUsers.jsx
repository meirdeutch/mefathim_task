import React, { useEffect, useState } from "react";
import { UserList, UsersContainer, UserItem, AddUserButton, EditButton, DeleteButton, LoadingSpinner, Header } from "./DisplayUsers.style";
import { useNavigate } from "react-router-dom";
import { deleteUser, displayUsers } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../../redux/loginStatus/loginStatusSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayUsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const fetchUsers = async () => {
        setIsLoading(true);
        const result = await displayUsers(token);
        if (result.success) {
            setUsers(result.data)
        } else {
            toast.error(result.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
            });
            if (result.error === "Unable to perform the operation, please log in again") {
                navigate('/');
                dispatch(logout())
            }
        }
        setIsLoading(false)
    };
    useEffect(() => {
        fetchUsers();
    }, [])
    const handleAddUser = () => {
        navigate('/user-form');
    }
    const handleDeleteUser = async (user_id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete the user?");
        if (userConfirmed) {
            const result = await deleteUser(user_id, token);
            if (result.success) {
                toast.success("The user was successfully deleted", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                setUsers(prevUsers => prevUsers.filter(user => user._id !== user_id));
            } else {
                toast.error(result.error, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                if (result.error === "Unable to perform the operation, please log in again") {
                    navigate('/');
                    dispatch(logout())
                }
            }
        }
    }
    const handleEditUser = (userDetails) => {
        navigate('/user-form', { state: { userDetails } })
    }
    return (
        <UsersContainer>
            <Header>
                <h1>User List</h1>
            </Header>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <UserList>
                        {users.map((user) => (
                            <UserItem key={user._id}>
                                <div >
                                    <h3>{user.username}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Full name: {user.fullName}</p>
                                </div>
                                <div className="user-actions ">
                                    <EditButton onClick={() => { handleEditUser(user) }}>Edit user information</EditButton>
                                    <DeleteButton onClick={() => { handleDeleteUser(user._id) }}>Delete user</DeleteButton>
                                </div>
                            </UserItem>
                        ))}
                    </UserList>
                    <AddUserButton onClick={handleAddUser}>
                        Add a new user
                    </AddUserButton>
                </>
            )}
        </UsersContainer>
    )
}
export default DisplayUsersComponent