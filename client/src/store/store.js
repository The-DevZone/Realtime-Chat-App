import { configureStore } from '@reduxjs/toolkit'

import userSliceReducer from '../store/user/user.slice'

export const store = configureStore({
    reducer: {
        userSliceReducer
    },
})