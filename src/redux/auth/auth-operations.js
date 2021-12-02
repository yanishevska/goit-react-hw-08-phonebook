import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error.data.statusText);
        
        }
    });

const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error.data.statusText);
        }
    });


const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            rejectWithValue(error.data.statusText);
        }
    });

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedContacts = state.auth.token;
        
        if (persistedContacts === null) {
            console.log('we have not token, back');
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedContacts);
  
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.data.statusText);
        }
    });


const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};
export default operations;
