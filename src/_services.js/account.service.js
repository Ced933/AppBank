// import { useSelector } from "react-redux";
import Axios from "./caller.service";

let login = (userData) => {
    return Axios.post('/api/v1/user/login', userData)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => localStorage.getItem('token');



export const accountService = {
    login,
    saveToken,
    logout,
    getToken

}