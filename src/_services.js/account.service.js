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

// let login = (userData) => {
//     return Axios.post('/api/v1/user/profile', userData)
// }


// const user = useSelector(state => console.log(state.users))
// let isLogged = () => {
//     let token = localStorage.getItem('token');
//     // !! transforme n'importe quelle variable en booléen donc la on dit si le token est vide ca va me renvoyer false 
//     // et s'il n'est pas vide ça me renverra true  
//     return !!token
// }

export const accountService = {
    login,
    saveToken,
    logout,
    getToken

}