import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation?.state === "loading" ? (<LoadingSpinner></LoadingSpinner>) : (<Outlet></Outlet>)
            }
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;