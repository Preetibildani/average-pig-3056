import React from "react";
import HPBody from '../components/HPBody';
import Footer1 from '../components/footer-chakra';
import { NavBar } from '../components/Navbar';
import Tabs_Homepage from '../components/Tabs';

const Homepage = () => {
    return (
        <>
        <NavBar />
        <Tabs_Homepage />
        <HPBody />
        <Footer1 />
        </>
    );
}
export default Homepage;