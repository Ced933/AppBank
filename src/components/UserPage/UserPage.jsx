import React from 'react';
import './UserPage.scss';

const UserPage = () => {
    const arrayTransaction = [{ title: 'Argent Bank Checking (x8349)', amount: 2082.79, description: "Available Balance" },
    { title: 'Argent Bank Savings (x6712)', amount: 10928.42, description: "Available Balance" },
    { title: 'Argent Bank Credit Card (x8349)', amount: 184.30, description: "Current Balance" }]
    return (
        <main className="main-user">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {/* <h2 className="sr-only">Accounts</h2> */}
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
            {/* <section className="account">
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
            </section> */}
        </main>
    );
};

export default UserPage;