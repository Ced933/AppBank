import React, { useContext, useEffect, useState } from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/Auth';
import { accountService } from '../../_services.js/account.service';
import { useDispatch, useSelector } from 'react-redux';


const Navigation = () => {
    // on va utiliser notre true ou false pour savoir si on est bien connécté 
    const userLogged = useSelector(state => state.users)
    console.log(userLogged.isConnect)

    const dispatch = useDispatch();
    // const { authEmail,
    //     setAuthEmail,
    //     isLoggedIn,
    //     setIsLoggedIn } = useAuth();


    const logOut = (e) => {
        e.preventDefault();
        accountService.logout()
        console.log("Tu viens de te déconnecté");
        dispatch({
            type: "users/addUsers",
            payload: ""
        })
        dispatch({
            type: "users/isLogged",
            payload: false
        })
        // setIsLoggedIn(false);
        // setAuthEmail(null)
        navigate('/')
    }

    // const [success, setSuccess] = useState();

    // let isConnected = localStorage.getItem("session");

    const navigate = useNavigate();

    // useEffect(() => {
    //     // setSuccess(isConnected);
    //     // console.log(success, isConnected);
    // }, [])
    return (
        <nav className="main-nav">
            <NavLink to={"/"} className={"main-nav-logo"}>
                <img
                    className="main-nav-logo-image"
                    src="../argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {/* {
                    isLoggedIn ? <h1>{authEmail.Name}</h1> : null
                } */}
                {
                    userLogged.isConnect ? <div> <NavLink to={'/admin/user'}> mon compte</NavLink> <NavLink onClick={(e) => { logOut(e) }} >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Sign Out
                    </NavLink> </div> : <NavLink to={"/auth/login"} >
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign In
                    </NavLink>
                }







            </div>
        </nav>
    );
};

export default Navigation;