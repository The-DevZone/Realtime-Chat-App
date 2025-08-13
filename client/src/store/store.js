import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../store/user/user.slice'

export const store = configureStore({
    reducer: {
        userReducer
    },
})