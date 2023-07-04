import React from 'react';
import {Container} from "../components/styled/Container.styled";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Layout() {

    return (
        <>
            <Container>
                <Header/>
                <Hero/>
                <FirstSection/>
                <SecondSection/>
                <Testimonials/>
                <Footer/>
            </Container>
        </>
    );
}

export default Layout;