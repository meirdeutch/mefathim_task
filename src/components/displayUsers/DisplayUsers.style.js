import styled, { keyframes } from 'styled-components';

export const UsersContainer = styled.div`
    padding: 20px;
    padding-top: 0;
    padding-bottom: 60px;
    background-color: #f4f4f9;
    border-radius: 8px;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
`;
export const Header = styled.div`
    background-color: #f4f4f9;
    position: sticky;
    top: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        text-align: center;
        color: #333;
        font-size: 24px;
    }
`;
export const UserList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const UserItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h3 {
        color: #4CAF50; 
        font-size: 18px;
        margin-bottom: 10px;
    }

    p {
        color: #555;
        margin: 5px 0;
        font-size: 14px;
    }

    &:hover {
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .user-actions {
        display: flex;
        flex-direction: column;
        gap: 10px; 
        /* align-items: flex-end; */
    } 
`;

export const AddUserButton = styled.button`
    display: block;
    width: 200px;
    padding: 10px;
    margin: 20px auto;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: fixed;
    bottom: 0;  
    left: 50%; 
    transform: translateX(-50%);
    
    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #388e3c;
    }

    &:focus {
        outline: none;
    }
`;

export const EditButton = styled.button`
    background-color: #ffa500;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #e68900;
    }

    &:active {
        background-color: #cc7a00;
    }

    &:focus {
        outline: none;
    }
`;

export const DeleteButton = styled.button`
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
    }

    &:active {
        background-color: #c62828;
    }

    &:focus {
        outline: none;
    }
`;
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
    border: 4px solid #f3f3f3; 
    border-top: 4px solid #3498db; 
    border-radius: 50%; 
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite; 
    margin: 0 auto; 
`;