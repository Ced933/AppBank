import React, { useEffect, useRef, useState } from 'react';
import './UserPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UserPage = () => {

    const arrayTransaction = [{ title: 'Argent Bank Checking (x8349)', amount: 2082.79, description: "Available Balance" },
    { title: 'Argent Bank Savings (x6712)', amount: 10928.42, description: "Available Balance" },
    { title: 'Argent Bank Credit Card (x8349)', amount: 184.30, description: "Current Balance" }]

    const [editToggle, setEditToggle] = useState(false);
    // on va chercher les données dans le store grace a useSelector  
    // const users = useSelector(getAllUser);
    const dispatch = useDispatch();
    // on recupère l'id 
    const navigate = useNavigate();
    const userLogged = useSelector(state => state.users);

    const [userData, setUserData] = useState({
        // de base c'est les element qui sont deja la exemple firstname : 'jack' je recupére userlogged du store et je precise que je veux le firstname
        firstName: userLogged.userInfo.firstName,
        lastName: userLogged.userInfo.lastName
    })



    useEffect(() => {

    }, [userLogged, userData])

    console.log(userData)

    if (userData) {

        console.log(userLogged.userInfo.firstName)
    }
    // on cherche le user avec l'id qui correspond a l'id de l'url 
    // const userCurrent = users.find(user => user._id === id);
    // const [editContent, setEditContent] = useState('');
    //    la fonction que je vais donner a mes input 
    const changeValue = (e) => {
        e.preventDefault();
        //    on reprend les anciennes de userData avec ...userData
        // en suite on lui donne pour chaque name une nouvelle valeur du moins celle qu'on est en train d'ecrire ds l'input  
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }


    const handleEdit = async (e) => {
        e.preventDefault();
        // Si les champs sont vide ou un des deux ou alors il y a juste des espace alors on envoie pas le formulaire  
        if (userData.firstName.trim().length !== 0 && userData.lastName.trim().length !== 0) {


            console.log('bien reçu')
            // on fait dispatraitre le bouton apres avoir cliqué desssus 
            setEditToggle(false)
            // on envoie les modification dans le store dans userInfo on va modifier le firstname et le lastname grace a newfirstname et newlastname qui sont ce qu'on est en train de tapé actuellement dans l'iinpu
            const token = localStorage.getItem('token');
            console.log(token);

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const bodyParameters = {
                // si l'utilisateur ne change pas de nom alors on prend la valeur qui était presente 
                firstName: userData.firstName ? userData.firstName : userLogged.userInfo.firstName,
                lastName: userData.lastName ? userData.lastName : userLogged.userInfo.lastName,
            };


            await axios.put('http://localhost:3001/api/v1/user/profile', bodyParameters,
                config).then(response => {
                    console.log(response)
                    dispatch({

                        type: "users/userInfo",
                        payload: {
                            email: response.data.body.email,
                            firstName: userData.firstName ? userData.firstName : userLogged.userInfo.firstName,
                            lastName: userData.lastName ? userData.lastName : userLogged.userInfo.lastName,
                            id: response.data.body.id,

                        }
                    })
                }
                ).catch(error => console.log(error), navigate('/auth/login'))
        }

    }

    // si tu n'est pas connecté tu n'a pas acces a la page user 
    if (!userLogged.isConnect) {
        return <Navigate to='/auth/login' />
    }

    return (
        <main className="main-user">
            <div className="header">
                {
                    editToggle ? (
                        <form onSubmit={(e) => handleEdit(e)}>
                            <h1>Welcome back<br /></h1>
                            <input type="text" name='firstName' defaultValue={userLogged.userInfo.firstName} onChange={changeValue} />
                            <input type="text" name='lastName' defaultValue={userLogged.userInfo.lastName} onChange={changeValue} />
                            <input type="submit" value="valider" />
                        </form>
                    ) :
                        (

                            <div>

                                <h1>Welcome back<br />{userLogged.userInfo.firstName} {userLogged.userInfo.lastName} !</h1>
                                <button onClick={() => setEditToggle(!editToggle)} className="edit-button">Edit Name</button>
                            </div>
                        )
                }
            </div>
            <h2 className="sr-only">Accounts</h2>

            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-two cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-two cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper-two cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default UserPage;