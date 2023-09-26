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
        updateUser:
            (state, { payload }) => {

                state.map((user) => {
                    if (user.id === payload.id) {
                        return {
                            ...user,
                            firstName: payload.firstName,

                        };
                    } else return user;
                })
            }
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

export const { addUsers, updateUser } = userSlice.actions;
export const getAllUser = state => state.users.users;
export default userSlice.reducer;