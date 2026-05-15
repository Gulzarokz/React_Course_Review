import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './CreateSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})