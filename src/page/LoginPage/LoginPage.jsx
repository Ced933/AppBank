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


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    console.log(userData);
    const { authEmail,
        setAuthEmail,
        isLoggedIn,
        setIsLoggedIn } = useAuth();

    // const [success, setSuccess] = useState(false);
    // user = ce que je suis en train de taper dans l'input 
    // const [user, setUser] = useState("");
    // const [password, setPassword] = useState('');


    const onChangeValue = (e) => {
        console.log(e)
        console.log(e.target.value)
        setUserData({

            ...userData,
            [e.target.name]: e.target.value
        })
    }


    const dispatch = useDispatch();
    // const [userData, setUserData] = useState({ firstName: '', lastName: '' })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/v1/user/login', userData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("Tu es connecté");
                    //          
                    setIsLoggedIn(true);
                    navigate('/admin')
                }
            }).catch(error => console.log(error))

    }
    // liste de tous les users dans le store 
    // const users = useSelector(getAllUser);
    // const filterUser = users.filter(el => el.firstName == user);
    // console.log(users);


    // const submitUser = () => {
    //     axios.post('http://localhost:3001/api/v1/user/login', {
    //         email: user,
    //         password: password
    //     }).then(res => {
    //         console.log(res);
    //         // si la requette est bonne alors je suis connecté sinon je ne suis pas connecté 
    //         if (res.status === 200) {
    //             console.log("Tu es connecté");
    //             setIsLoggedIn(true);
    //             setAuthEmail({
    //                 Name: user
    //             })
    //             let token = res.data.body.token;
    //             localStorage.setItem('token', token)

    //             navigate(`/admin/user`);

    //         } else if (res.response.data.status === 400) {
    //             console.log('error');
    //             navigate(`/auth/login`);
    //         } else {
    //             console.log('recommence')
    //         }
    //     }).catch(error => {
    //         return error;
    //     });
    // }


    // const handleForm = (e) => {
    //     e.preventDefault();

    //     console.log(user, password)


    //     submitUser()


    // }

    const deconnexion = () => {
        // localStorage.setItem("session", false);
        console.log("Tu viens de te déconnecté");

        setIsLoggedIn(false);
        setAuthEmail(null)
        navigate('/');

    }


    // useEffect(() => {
    // const fetchUser = async () => {
    //     const response = await axios.get('http://localhost:3001/users')
    //     // dispatch envoie les données dans le store 
    //     dispatch(addUsers(response.data));
    // };
    // fetchUser();
    // const currentUser = 


    // }, [user])

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



    );
};

export default LoginPage;