import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        token: '',
        userInfo: '',
    },
    reducers: {
        tokenUser: (state, action) => {
            state.token = action.payload;

        },
        userInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    },
});

export const { tokenUser, userInfo } = userSlice.actions;
export default userSlice.reducer;