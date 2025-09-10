import { createSlice } from '@reduxjs/toolkit'
import { getMessageThunk, sandMessageThunk } from './message.thunk'

const initialState = {
    messages: null,
    buttonLoading: false,
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //send message 
        builder.addCase(sandMessageThunk.pending, (state) => {
            state.buttonLoading = true;
        })
        builder.addCase(sandMessageThunk.fulfilled, (state, action) => {
            const oldMessages = state.messages ?? [];
            state.messages = [...oldMessages, action.payload?.responseData];
            state.buttonLoading = false;
        });
        builder.addCase(sandMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })
        //  get message slice
        builder.addCase(getMessageThunk.pending, (state) => {
            state.buttonLoading = true;
        })
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            state.messages = action?.payload?.responseData?.messages;
            state.buttonLoading = false;
        });
        builder.addCase(getMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })
    }
})

// export const { } = messageSlice.actions
export default messageSlice.reducer