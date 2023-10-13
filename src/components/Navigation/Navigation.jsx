import React from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { accountService } from '../../_services.js/account.service';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
    // on va utiliser notre true ou false pour savoir si on est bien connécté 
    const userLogged = useSelector(state => state.users)
    console.log(userLogged)

    const dispatch = useDispatch();

    const logOut = (e) => {
        e.preventDefault();
        accountService.logout()
        console.log("Tu viens de te déconnecté");
        dispatch({
            type: "users/tokenUser",
            payload: null
        })
        // dispatch({
        //     type: "users/isLogged",
        //     payload: false
        // })
        dispatch({
            type: "users/userInfo",
            payload: {
                isLogged: false,
                email: null,
                firstName: null,
                lastName: null,
                id: null
            }
        })
        navigate('/')
    }

    const navigate = useNavigate();

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
                {
                    userLogged.userInfo.isLogged ? <div> <NavLink to={'/admin/user'}> <FontAwesomeIcon icon={faCircleUser} />{userLogged.userInfo.firstName}</NavLink> <NavLink onClick={(e) => { logOut(e) }} >
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