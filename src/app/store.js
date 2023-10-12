// redux 
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";



export default configureStore({

    reducer: {
        // c'est ce nom users qui apparaitra dans le store
        users: userReducer,


    },

})

