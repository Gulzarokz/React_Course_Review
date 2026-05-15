import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => { },
        removeUser: (state, action) => { }
    }
})

export { userSlice };