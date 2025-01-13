import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
    align-self: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    
    &:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;
export const Button = styled.button`
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #4CAF50;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #388e3c;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    &.delete {
        background-color: #f44336;
    }

    &.delete:hover {
        background-color: #e53935;
    }

    &.delete:active {
        background-color: #c62828;
    }
`;