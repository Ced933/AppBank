import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isConnect: false,
        token: '',
        userInfo: '',

    },
    reducers: {
        addUsers: (state, action) => {
            state.token = action.payload;

        },
        isLogged: (state, action) => {

            state.isConnect = action.payload;
        },
        userInfo: (state, action) => {
            state.userInfo = action.payload;
            // state.firstName = action.payload;
            // state.lastName = action.payload;
            // state.id = action.payload;
        }
        // editInfo :(state, action) =>{
        //  return{
        //     ...state.userInfo,
        //     state.userInfo = action.payload

        //  }   


        // (state, { payload }) => {

        //     state.map((user) => {
        //         if (user.id === payload.id) {
        //             return {
        //                 ...user,
        //                 firstName: payload.firstName,

        //             };
        //         } else return user;
        //     })
        // }
    },
});

// export const connexion = createSlice({
//     name: 'isConnected',
//     initialState: [{ success: false }],
//     reducers: {
//         login: (state, action) => {
//             const success = {
//                 success: false
//             }
//         }
//     }
// })

export const { addUsers, isLogged, userInfo } = userSlice.actions;
export const getAllUser = state => state.users.users;
export default userSlice.reducer;