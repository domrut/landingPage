import React from 'react';
import {Container} from "../components/styled/Container.styled";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import {useLocation} from "react-router";

function Layout() {

    const {pathname} = useLocation();

    return (
        <>
            <Container>
                {pathname !== "/login" && pathname !== "/register" &&
                    <>
                        <Header/>
                        <Hero/>
                        <FirstSection/>
                        <SecondSection/>
                        <Testimonials/>
                    </>
                }
                <Footer/>
            </Container>
        </>
    );
}

export default Layout;