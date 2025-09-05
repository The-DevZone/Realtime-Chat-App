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

            console.log("Message Added:", action.payload?.responseData); // ✅ Console check
            console.log("All Messages:", state.messages); // ✅ Confirm added
            state.buttonLoading = false;
        });
        builder.addCase(sandMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })






        //get message
        builder.addCase(getMessageThunk.pending, (state) => {
            state.buttonLoading = true;
        })
        // builder.addCase(getMessageThunk.fulfilled, (state, action) => {
        //     // console.log(action.payload.responseData.message)
        //     console.log("getMessageThunk response 👉", action.payload.responseData);
        //     state.messages = action.payload.responseData.message
        //     state.buttonLoading = false;
        // })

        // builder.addCase(getMessageThunk.fulfilled, (state, action) => {
        //         state.messages = action.payload.responseData.message;
        //         state.buttonLoading = false;
        //     // const serverMsgs = action.payload.responseData.message || [];

        // //     // local aur server merge karo, duplicates hatao
        // //     const allMsgs = [...serverMsgs, ...state.messages];
        // //     const uniqueMsgs = allMsgs.filter(
        // //         (msg, index, self) => index === self.findIndex(m => m._id === msg._id)
        // //     );

        // //     state.messages = uniqueMsgs.sort(
        // //         (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        // //     );
        // //     state.buttonLoading = false;
        // });

        // builder.addCase(getMessageThunk.fulfilled, (state, action) => {
        //     const conversation = action?.payload?.responseData;
        //     state.messages = conversation?.message || [];
        //     console.log(conversation)
        //     state.buttonLoading = false;
        // });

        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            const conversation = action?.payload?.responseData;

            state.messages = [...(conversation?.message || [])].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            );

            console.log("Fetched messages:", state.messages);
            state.buttonLoading = false;
        });


        builder.addCase(getMessageThunk.rejected, (state) => {
            state.buttonLoading = false;
        })
    }
})

// export const { } = messageSlice.actions
export default messageSlice.reducer