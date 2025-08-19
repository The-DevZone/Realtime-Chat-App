import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../components/utitlities/axiosInstance"
import toast from "react-hot-toast"


export const loginUserThunk = createAsyncThunk('users/login', async ({ email, password }, { rejectWithValue }) => {

    try {
        const response = await axiosInstance.post("/users/login", {
            email,
            password,
        })
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
        return rejectWithValue(error)
    }
})

export const registerUserThunk = createAsyncThunk('users/register', async ({ fullName, email, password, gender }, { rejectWithValue }) => {

    try {
        const response = await axiosInstance.post("/users/register", {
            fullName,
            email,
            password,
            gender
        })

        return response.data
    } catch (error) {
        console.error(error)
        const errorMessage = error?.response?.data?.message
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
    }
})

export const logOutUserThunk = createAsyncThunk(
    "users/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/users/logout");
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const getProfileThunk = createAsyncThunk(
    "users/get-profile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/users/get-profile");
            console.log("getProfileThunk hu ma ", response.data)
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
})

export const otherUserProfileThunk = createAsyncThunk(
    "users/other-users",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/users/other-users");
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)

export const searchUserThunk = createAsyncThunk(
    "users/search",
    async (searchTerm = "" , {rejectWithValue} ) => {
        try {
            const response = await axiosInstance.get(`/users/search-users?search=${searchTerm}`);
            return response.data;
            
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
            
        }
    }
)
