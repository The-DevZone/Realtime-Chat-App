import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk, loginUserThunk, logOutUserThunk, otherUserProfileThunk, registerUserThunk, searchUserThunk } from './user.thunk'
// import { getOtherUsers } from '../../../../server/controllers/user.controller'

const initialState = {
    isAuthenticated: false,
    otherUser: null,
    userProfile: null,
    buttonLoading: false,
    screenLoading: true,
    selectedUser: null,
    searchUser: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action?.payload
        }

    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        //login slice
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload.responseData.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })

        // register slice 
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.userProfile = action?.payload?.responseData?.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })

        // logout slice 
        builder.addCase(logOutUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(logOutUserThunk.fulfilled, (state, action) => {
            state.isAuthenticated = false;
            state.buttonLoading = false;
            state.userProfile = null;
            state.buttonLoading = false;
            state.screenLoading = false;
        })
        builder.addCase(logOutUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })

        // get profile slice
        builder.addCase(getProfileThunk.pending, (state) => {
            state.screenLoading = true
        })

        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload  // ✅ yahin save hoga profile
            state.isAuthenticated = true
            state.screenLoading = false
        })

        builder.addCase(getProfileThunk.rejected, (state) => {
            state.screenLoading = false
            state.isAuthenticated = false
            state.userProfile = null
        })

        // get other user profile
        builder.addCase(otherUserProfileThunk.pending, (state, action) => {
            // state.screenLoading = true
        })
        builder.addCase(otherUserProfileThunk.fulfilled, (state, action) => {
            state.otherUser = action?.payload?.responseData
            state.screenLoading = false
            // console.log(action.payload)
        })
        builder.addCase(otherUserProfileThunk.rejected, (state, action) => {
            state.screenLoading = false
        })

        // search user profile filter bar
        builder.addCase(searchUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(searchUserThunk.fulfilled, (state, action) => {
            state.searchUser = action?.payload?.responseData
            state.buttonLoading = false;
        })
        builder.addCase(searchUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedUser } = userSlice.actions
export default userSlice.reducer

