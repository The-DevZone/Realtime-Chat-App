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
            const newMessage = action.payload.responseData.message
            // agar state.messages null hai to [] se start karo
            if (!state.messages) {
                state.messages = []
            }
            // naye message ko push kar do
            state.messages.push(newMessage)
            state.buttonLoading = false;
            state.buttonLoading = false;
        })
        builder.addCase(sandMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })

        //get message
        builder.addCase(getMessageThunk.pending, (state) => {
            state.buttonLoading = true;
        })
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            console.log(action.payload.responseData.message)
            state.messages = action.payload.responseData.message
            state.buttonLoading = false;
        })
        builder.addCase(getMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })
    }
})

// export const { } = messageSlice.actions
export default messageSlice.reducer