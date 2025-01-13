import { configureStore } from '@reduxjs/toolkit';
import loginStatusReducer from './loginStatusSlice'

const store = configureStore({
    reducer: {
        loginStatus: loginStatusReducer,
    },
});

export default store;
