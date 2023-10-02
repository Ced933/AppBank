import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout';
import UserPage from '../UserPage/UserPage';
import ErrorPage from '../../_utils/ErrorPage';

const AdminRouter = () => {
    return (
        <div>
            <Routes>

                <Route element={<BaseLayout />}>
                    <Route index element={<UserPage />} />
                    <Route path='user' element={<UserPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>

            </Routes>
        </div>
    );
};

export default AdminRouter;