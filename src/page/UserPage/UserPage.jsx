import React, { useState } from 'react';
import './UserPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';


const UserPage = () => {

    const arrayTransaction = [{ title: 'Argent Bank Checking (x8349)', amount: 2082.79, description: "Available Balance" },
    { title: 'Argent Bank Savings (x6712)', amount: 10928.42, description: "Available Balance" },
    { title: 'Argent Bank Credit Card (x8349)', amount: 184.30, description: "Current Balance" }]

    const [editToggle, setEditToggle] = useState(false);
    // on va chercher les données dans le store grace a useSelector  
    // const users = useSelector(getAllUser);
    const dispatch = useDispatch();
    // on recupère l'id 
    // const { id } = useParams();
    // console.log(id);
    const userLogged = useSelector(state => state.users);

    const [userData, setUserData] = useState({
        newfirstname: userLogged.userInfo.firstName,
        newlastname: userLogged.userInfo.lastName
    })


    console.log(userData)

    console.log(userLogged.isConnect)
    // on cherche le user avec l'id qui correspond a l'id de l'url 
    // const userCurrent = users.find(user => user._id === id);
    const [editContent, setEditContent] = useState('');
    // console.log(editContent);
    const changeValue = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target.value)
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        // setEditToggle(false)
        // const userData = {
        //     firstName: editContent,
        //     lastName: userCurrent.lastName,
        //     password: userCurrent.password,
        //     email: userCurrent.email,
        //     createdAt: userCurrent.createdAt

        // };
        // dispatch(updateUser(userData));
        // setEditToggle(false);

    }
    const handleEdit = (e) => {
        e.preventDefault()
        console.log('bien reçu')
        setEditToggle(false)
        dispatch({
            type: "users/userInfo",
            payload: {
                firstName: userData.newfirstname,
                lastName: userData.newlastname
            }
        })
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
                            <input type="text" name='newfirstname' autoFocus={true} defaultValue={userLogged.userInfo.firstName} onChange={changeValue} />
                            <input type="text" name='newlastname' autoFocus={true} defaultValue={userLogged.userInfo.lastName} onChange={changeValue} />
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
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default UserPage;