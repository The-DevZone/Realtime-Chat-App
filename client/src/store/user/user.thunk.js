import { createAsyncThunk } from "@reduxjs/toolkit"


export const loginUserThunk = createAsyncThunk('users/fetchByIdStatus', async () => {
    console.log("ma chal raha hu koi problem nhi ha sale ma thunk hu ")
},)