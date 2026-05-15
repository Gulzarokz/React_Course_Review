import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => { },
        deleteUser: (state, action) => { },
        removeUser: (state, action) => { }
    }
})

export { userSlice };