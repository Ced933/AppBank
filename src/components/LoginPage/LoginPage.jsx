import React, { useEffect, useState } from 'react';
import './LoginPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, getAllUser } from '../../feature/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import data from '../../data';
import { useAuth } from '../../contexts/Auth';

const LoginPage = () => {

    const { authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn } = useAuth();

    const [success, setSuccess] = useState(false);
    // user = ce que je suis en train de taper dans l'input 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();
    // liste de tous les users dans le store 
    const users = useSelector(getAllUser);
    // const filterUser = users.filter(el => el.firstName == user);
    // console.log(users);

    const handleForm = (e) => {
        e.preventDefault();
        // setUser('');
        console.log(user, password)
        // ca filtre par le nom 
        // console.log(filterUser);

        const result = users.find(el => (el.firstName === user) && el.password === password);



        // console.log(result);
        // let isConnected = localStorage.getItem("session");
        // console.log(isConnected);

        if (result) {
            console.log("Tu es connecté");
            // setSuccess(true);
            // localStorage.setItem("session", true);
            // setSuccess(isConnected);
            setIsLoggedIn(true);
            setAuthUser({
                Name: user
            })

            navigate('/user');



        } else {
            console.log("Tu n'es pas connecté");
            // localStorage.setItem("session", false);
            // setSuccess(isConnected);
        }

    }
    const deconnexion = () => {
        // localStorage.setItem("session", false);
        // console.log("Tu viens de te déconnecté");

        setIsLoggedIn(false);
        setAuthUser(null)
        navigate('/');

    }


    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('http://localhost:3001/api/v1/user/signup')
            // dispatch envoie les données dans le store 
            dispatch(addUsers(response.data));
        };
        fetchUser();



    }, [user])

    return (
        <>
            {
                success ? (
                    <div>

                        <h1>Tu es Connecté broo </h1>
                        <button onClick={deconnexion}>Deconnexion</button>
                    </div>
                ) : (
                    <div>
                        <main className="main bg-dark">
                            <section className="sign-in-content">
                                <FontAwesomeIcon icon={faCircleUser} />
                                <h1>Sign In</h1>
                                <form onSubmit={(e) => handleForm(e)}>
                                    <div className="input-wrapper">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" defaultValue={user} onChange={(e) => { setUser(e.target.value) }} />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" defaultValue={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <div className="input-remember">
                                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label >
                                    </div>
                                    {/* PLACEHOLDER DUE TO STATIC SITE  */}
                                    <button className='sign-in-button'>Sign In
                                    </button>
                                    {/* <a href="./user.html" className="sign-in-button"></a> */}
                                    {/* SHOULD BE THE BUTTON BELOW  */}
                                    {/* <button className="sign-in-button">Sign In</button> */}

                                </form>
                            </section>
                        </main>
                    </div>
                )
            }

        </>
    );
};

export default LoginPage;