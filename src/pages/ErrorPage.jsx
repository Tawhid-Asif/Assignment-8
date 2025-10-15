import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
                <div>
                    <img src="/error-404.png" alt="" />
                </div>
                <h1 className="text-5xl font-bold mb-4 text-red-500">Oops!</h1>
                <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
                <p className="text-gray-500 mb-4">
                    {error.statusText || error.message || "Page Not Found"}
                </p>
                <Link
                    to="/"
                    className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg "
                >
                    Go Back Home
                </Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;