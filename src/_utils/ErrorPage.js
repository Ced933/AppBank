import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <div className='error-box'>

                <h1 className='error-h1'>404</h1>
                <h3 className='error-h3'>Oops, this page not Found !</h3>
                <h5 className='error-h5'>The link migh be corrupted,</h5>
                <p className='error-p'>Or th page may have been removed</p>
                <Link className='btn-goback' to={'/'}>GO BACK HOME</Link>
            </div>

        </div>
    );
};

export default ErrorPage;