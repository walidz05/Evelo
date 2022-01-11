import React from 'react'
import Header from '../components/Header';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Products from '../components/Products';
import Evelo from '../components/Evelo';
import Evelo_Second from '../components/Evelo_Second';
import Evelo_thirty from '../components/Evelo_thirty';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <Features/>
            <Reviews/>
            <Products/>
            <Evelo/>
            <Evelo_Second/>
            <Evelo_thirty/>
            <Services/>
            <Footer/>
        </>
    )
}

export default Home
