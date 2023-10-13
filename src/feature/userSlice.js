import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        // userInfo.isConnect: false,
        token: '',
        userInfo: '',
    },
    reducers: {
        tokenUser: (state, action) => {
            state.token = action.payload;

        },
        // isLogged: (state, action) => {

        //     state.userInfo.isLogged = action.payload;
        // },
        userInfo: (state, action) => {
            state.userInfo = action.payload;

        }
    },
});


export const { tokenUser, isLogged, userInfo } = userSlice.actions;
export const getAllUser = state => state.users.users;
export default userSlice.reducer;