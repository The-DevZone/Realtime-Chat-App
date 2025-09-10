import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk, loginUserThunk, logOutUserThunk, otherUserProfileThunk, registerUserThunk, searchUserThunk } from './user.thunk'
// import { getOtherUsers } from '../../../../server/controllers/user.controller'

const initialState = {
    isAuthenticated: false,
    otherUser: null,
    userProfile: null,
    buttonLoading: false,
    screenLoading: true,
    selectedUser: JSON.parse(localStorage.getItem("selectedUser")),
    searchUser: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            localStorage.setItem("selectedUser", JSON.stringify(action?.payload))
            state.selectedUser = action?.payload
        }
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        //login slice
        builder.addCase(loginUserThunk.pending, (state) => {
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
                  state.userProfile = action.payload.responseData.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(loginUserThunk.rejected, (state) => {
            state.buttonLoading = false
        })

        // register slice 
        builder.addCase(registerUserThunk.pending, (state) => {
            state.buttonLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            console.log( action.payload)
            state.userProfile = action?.payload?.responseData?.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state) => {
            state.buttonLoading = false
        })

        // logout slice 
        builder.addCase(logOutUserThunk.pending, (state) => {
            state.buttonLoading = true
        })
        builder.addCase(logOutUserThunk.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.buttonLoading = false;
            state.selectedUser = null;
            state.userProfile = null;
            state.otherUser = null;
            state.searchUser = null;
            state.screenLoading = false;
            localStorage.clear();
        })
        builder.addCase(logOutUserThunk.rejected, (state) => {
            state.buttonLoading = false
        })

        // get profile slice
        builder.addCase(getProfileThunk.pending, (state) => {
            state.screenLoading = true
        })

        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload.responseData;
            state.isAuthenticated = true
            state.screenLoading = false
        })

        builder.addCase(getProfileThunk.rejected, (state) => {
            state.screenLoading = false
            state.isAuthenticated = false
            state.userProfile = null
        })

        // get other user profile
        builder.addCase(otherUserProfileThunk.pending, () => {
        })
        builder.addCase(otherUserProfileThunk.fulfilled, (state, action) => {
            state.otherUser = action?.payload?.responseData
            state.screenLoading = false
        })
        builder.addCase(otherUserProfileThunk.rejected, (state) => {
            state.screenLoading = false
        })

        // search user profile filter bar
        builder.addCase(searchUserThunk.pending, (state) => {
            state.buttonLoading = true
        })
        builder.addCase(searchUserThunk.fulfilled, (state, action) => {
            state.searchUser = action?.payload?.responseData
            state.buttonLoading = false;
        })
        builder.addCase(searchUserThunk.rejected, (state) => {
            state.buttonLoading = false
        })
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedUser } = userSlice.actions
export default userSlice.reducer

