import React, { useContext, useState } from 'react';
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authEmail, setAuthEmail] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authEmail,
        setAuthEmail,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}