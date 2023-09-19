import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, { payload }) => {
            state.users = payload;
        },
        // login: (stats) =>{
        //     success = false
        // }
        // logout: (state) =>{
        //     state.user = null;
        // }
    },
});

export const connexion = createSlice({
    name: 'isConnected',
    initialState: [{ success: false }],
    reducers: {
        login: (state, action) => {
            const success = {
                success: false
            }
        }
    }
})

export const { addUsers } = userSlice.actions;
export const getAllUser = state => state.users.users;
export default userSlice.reducer;