import {createSlice } from "@reduxjs/toolkit";

const initialState = {

    token: localStorage.getItem('token') || null,
    isLoggedIn: !!localStorage.getItem('token'),
};

const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
        },
    },
});
export const { login, logout } = loginStatusSlice.actions;
export const selectIsLoggedIn = (state) => state.loginStatus.isLoggedIn;
export const selectToken = (state) => state.loginStatus.token;
export default loginStatusSlice.reducer;