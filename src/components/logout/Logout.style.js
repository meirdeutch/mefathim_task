import styled from "styled-components";
export const LogoutButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #f4f4f9;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const logoutText = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;