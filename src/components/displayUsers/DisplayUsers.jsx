import React, { useEffect, useState } from "react";
import { UserList, UsersContainer, UserItem, AddUserButton, EditButton, DeleteButton, LoadingSpinner } from "./DisplayUsers.style";
import { useNavigate } from "react-router-dom";
import { deleteUser, displayUsers } from "../../api/api";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/loginStatus/loginStatusSlice";

const DisplayUsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const fetchUsers = async () => {
        setIsLoading(true);
        const result = await displayUsers(token);
        if (result.success) {
            setUsers(result.data)
        } else {
            alert(result.error)
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
                setUsers(prevUsers => prevUsers.filter(user => user._id !== user_id));
            } else {
                alert(result.error)
            }
        }

    }
    const handleEditUser = (userDetails) => {
        navigate('/user-form', { state: { userDetails } })
    }
    return (
        <UsersContainer>
            <h2>Users List</h2>
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
                                    <EditButton onClick={() => { handleEditUser(user) }}>Edit users details</EditButton>
                                    <DeleteButton onClick={() => { handleDeleteUser(user._id) }}>Delete user</DeleteButton>
                                </div>
                            </UserItem>
                        ))}
                    </UserList>
                    <AddUserButton onClick={handleAddUser}>
                        Add New User
                    </AddUserButton>
                </>
            )}
        </UsersContainer>
    )
}
export default DisplayUsersComponent