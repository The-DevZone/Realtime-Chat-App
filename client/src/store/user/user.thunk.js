import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../components/utitlities/axiosInstance"
import toast from "react-hot-toast"


export const loginUserThunk = createAsyncThunk('users/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/users/login", {
            email,
            password,
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
        return rejectWithValue(error)
    }
},)

export const registerUserThunk = createAsyncThunk('users/register', async ({ fullName, email, password, confirmPassword }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/users/register", {
            fullName,
            email,
            password,
            confirmPassword,
        })
        console.log(response)

    } catch (error) {
        console.error(error)
        // console.log(error?.response?.data?.message)
        const errorMessage = error?.response?.data?.message
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
    }
})