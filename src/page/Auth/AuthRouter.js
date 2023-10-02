import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../../_utils/ErrorPage';
import LoginPage from '../LoginPage/LoginPage';
import BaseLayout from '../../components/BaseLayout';


const AuthRouter = () => {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                <Route index element={<LoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

export default AuthRouter;