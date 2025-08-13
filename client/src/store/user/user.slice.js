import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk, loginUserThunk, logOutUserThunk, registerUserThunk } from './user.thunk'

const initialState = {
    isAuthenticated: false,
    screenloading: false,
    userProfile: null,
    buttonLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        //login slice
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            state.userProfile = action.payload.responseData.user
            state.isAuthenticated = true

            state.screenloading = true
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            // Add user to the state array
            state.buttonLoading = false
        })


        // register slice 
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            state.userProfile = action.payload.responseData.user
            state.buttonLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            // Add user to the state array
            state.buttonLoading = false
        })


        // logout slice 
        builder.addCase(logOutUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(logOutUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            state.isAuthenticated = false,
                state.screenloading = false,
                state.userProfile = null,
                state.buttonLoading = false
        })
        builder.addCase(logOutUserThunk.rejected, (state, action) => {
            // Add user to the state array
            state.buttonLoading = false
        })

        // getProfile slice 
        builder.addCase(getProfileThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.userProfile = action?.payload?.responseData
            state.isAuthenticated = true
            state.buttonLoading = false
            console.log(action.payload)
        })
        builder.addCase(getProfileThunk.rejected, (state, action) => {
            // Add user to the state array
            state.buttonLoading = false
        })
    },
})

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions
export default userSlice.reducer

