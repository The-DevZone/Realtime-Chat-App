import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../store/user/user.slice'
import messageReducer from "../store/message/message.slice"
// import messageReducer from "../store/message/message.slice"

export const store = configureStore({
    reducer: {
        userReducer,
        messageReducer
    },
})