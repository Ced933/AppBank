import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '../_services.js/account.service';
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    console.log(children)
    const [authEmail, setAuthEmail] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authEmail,
        setAuthEmail,
        isLoggedIn,
        setIsLoggedIn
    }

    // let logged = () => {
    //     let token = localStorage.getItem('token');
    //     return !!token
    // }
    let token = localStorage.getItem('token');

    // if (!accountService.isLogged()) {
    //     // return navigate('/auth/login')
    //     // return <Navigate to="/auth/login" />
    // }

    return (

        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}