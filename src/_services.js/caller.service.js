import axios from "axios";
import { accountService } from "./account.service";
import { useAuth } from "../contexts/Auth";

const Axios = axios.create({
    baseURL: 'http://localhost:3001'
})


// intercepteur de token 
// Axios.interceptors.request.use(request => {

//     // request.headers.Authorization = "Bearer" + accountService.getToken();
//     console.log(request)


// })

export default Axios;