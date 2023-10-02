import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
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

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}