import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import {Outlet} from 'react-router' ;

const MainLayout = () => {
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            <main className='mx-auto w-11/12 max-w-7xl py-8 lg:py-12'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;