import React, { useContext, useEffect, useState } from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

const Navigation = () => {
    const { authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn } = useAuth();

    // const logIn = (e) => {
    //     e.preventDefault();
    //     setIsLoggedIn(true);
    //     setAuthUser({
    //         Name: 'John Doe'
    //     })
    // }
    const logOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser(null)
        navigate('/')
    }

    const [success, setSuccess] = useState();

    let isConnected = localStorage.getItem("session");

    const navigate = useNavigate();

    useEffect(() => {
        setSuccess(isConnected);
        console.log(success, isConnected);
    }, [isConnected, success])
    return (
        <nav className="main-nav">
            <NavLink to={"/"} className={"main-nav-logo"}>
                <img
                    className="main-nav-logo-image"
                    src="./argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {
                    isLoggedIn ? <h1>{authUser.Name}</h1> : null
                }
                {
                    isLoggedIn ? <NavLink onClick={(e) => { logOut(e) }} >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Sign Out
                    </NavLink> : <NavLink to={"/login"} >
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign In
                    </NavLink>
                }







            </div>
        </nav>
    );
};

export default Navigation;