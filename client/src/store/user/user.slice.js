import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'

const initialState = {
    isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginUserThunk.pending, (state, action) => {
            // Add user to the state array
            //   state.entities.push(action.payload)
            console.log("pending")
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            //   state.entities.push(action.payload)
            console.log("fulfilled")
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            // Add user to the state array
            //   state.entities.push(action.payload)
            console.log("rejected")
        })
    },


})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer