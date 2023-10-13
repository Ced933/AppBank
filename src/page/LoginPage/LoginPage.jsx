import React, { useEffect, useState } from 'react';
import './LoginPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { accountService } from '../../_services.js/account.service';
const LoginPage = () => {

    const [userData, setUserData] = useState({
        email: 'tony@stark.com',
        password: 'password123'
    })

    const userLogged = useSelector(state => state.users)

    const onChangeValue = (e) => {
        setUserData({
            // on prend les ancien valuer et on les change avec le name et la value 
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        accountService.login(userData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("Tu es connecté");
                    accountService.saveToken(res.data.body.token)
                    dispatch({
                        type: "users/tokenUser",
                        payload: res.data.body.token
                    })
                    dispatch({
                        type: "users/userInfo",
                        payload: {
                            isLogged: true,
                            email: res.data.body.email,
                            firstName: res.data.body.firstName,
                            lastName: res.data.body.lastName,
                            id: res.data.body.id
                        }
                    })
                    let token = localStorage.getItem('token');
                    if (res.status === "200") {

                        navigate('/admin')
                    }
                }
                // en cas d'erreur 401 
                if (res.status === 401) {
                    navigate('/auth/login');
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

                    console.log('Unauthorized')
                }

                // On recupère le token + info user 

                let token = res.data.body.token;

                console.log(token);
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const bodyParameters = {
                    key: "value"
                };
                axios.post(
                    'http://localhost:3001/api/v1/user/profile',
                    bodyParameters,
                    config
                ).then(res => {
                    console.log(res)
                    dispatch({
                        type: "users/userInfo",
                        payload: {
                            isLogged: true,
                            email: res.data.body.email,
                            firstName: res.data.body.firstName,
                            lastName: res.data.body.lastName,
                            id: res.data.body.id
                        }
                    })
                }
                ).catch(console.log);

            }).catch(error => console.log(error), navigate('/auth/login'))
    }

    let token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            // dispatch({
            //     type: "users/userInfo",
            //     payload: {
            //         isLogged: true,
            //         email: userLogged.userInfo.email,
            //         firstName: userLogged.userInfo.firstName,
            //         lastName: userLogged.userInfo.lastName,
            //         id: userLogged.userInfo.id
            //     }
            // })
            navigate('/admin')

        } else {
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
            navigate('/auth/login');

        }
    }, [token])

    return (

        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" defaultValue={userData.email} onChange={onChangeValue} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" defaultValue={userData.password} onChange={onChangeValue} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label >
                        </div>
                        <button className='sign-in-button'>Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default LoginPage;