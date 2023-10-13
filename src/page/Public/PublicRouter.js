import React from 'react';
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../../_utils/ErrorPage";
import BaseLayout from "../../components/BaseLayout";
import Home from "../Home/Home";

const PublicRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default PublicRouter;