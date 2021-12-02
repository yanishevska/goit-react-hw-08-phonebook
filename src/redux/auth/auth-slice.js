import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null,
    isLoading: false,
   isNotification: {},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.isLoggedIn = true;
            state.isNotification = {
                status: 'success',
                message: 'Success registered!'
            }
        },
        [authOperations.register.rejected](state, action) {
            state.isLoggedIn = false;
            state.isNotification = {
                  status: 'error',
                message: 'Error registered! Try again!'
            }
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isNotification = {
                status: 'success',
                message: 'Success authorization!'
            }
        },
          [authOperations.logIn.rejected](state, action) {
            state.isLoggedIn = false;
            state.isNotification = {
                status: 'error',
                message: 'Error! Try again!'
            }
        },
        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isNotification = {
                status: 'success',
                message: 'Success logout!'
            };
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state, action) {
            state.isFetchingCurrentUser = false;
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;