import React, { useEffect } from 'react';
import './Home.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, getAllUser } from '../../feature/userSlice';


const Home = () => {
    const arrayFeature = [{ img: "./icon-chat.png", title: "You are our #1 priority", content: " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." },
    { img: "./icon-money.png", title: "More savings means higher rates", content: "  The more you save with us, the higher your interest rate will be!" },
    { img: "./icon-security.png", title: "Security you can trust", content: "We use top of the line encryption to make sure your data and money is always safe." }]



    const dispatch = useDispatch();
    // useSelectore permet de récupérer les données dans le store et pouvoir les utiliser 
    const user = useSelector(getAllUser);
    console.log(user);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const response = await axios.get('http://localhost:3001/users')
    //         // dispatch envoie les données dans le store 
    //         dispatch(addUsers(response.data));
    //     };
    //     fetchUser();

    // }, [])
    return (
        <div>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <section className="features">
                <h2 className="sr-only">Features</h2>
                {
                    arrayFeature.map((feature, index) => {

                        return <div key={index} className="feature-item">
                            <img src={feature.img} alt="Chat Icon" className="feature-icon" />
                            <h3 className="feature-item-title">{feature.title}</h3>
                            <p>{feature.content}</p>
                        </div>
                    })
                }

            </section>

        </div>
    );
};

export default Home;