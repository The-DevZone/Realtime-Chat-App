import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../components/utitlities/axiosInstance"

export const sandMessageThunk = createAsyncThunk(
    'message/message',
    async ({ receiverId, message }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`message/send/${receiverId}`, {
                message
            })
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    })

export const getMessageThunk = createAsyncThunk(
    'message/getMessage',
    async ({ receiverId }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`message/get-message/${receiverId}`,)
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    })

