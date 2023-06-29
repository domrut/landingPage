import React from 'react';
import {HeroButton} from "./styled/Button.styled";
import {Heading1, HeroMain, HeroImageStyled, Buttons} from "./styled/Hero.styled";
import {Paragraph} from "./styled/Paragraph.styled";
import heroImage from "../assets/HeroImage.png";
function Hero() {
    return (
        <HeroMain>
            <Heading1>Landing template for startups</Heading1>
            <Paragraph>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</Paragraph>
            <Buttons>
                <HeroButton as="a" href="#" color="#fff">Start free trial</HeroButton>
                <HeroButton as="a" href="#" color="#fff" background="#33363A" left="0.75rem">Learn more</HeroButton>
            </Buttons>
            <HeroImageStyled>
                <img src={heroImage} alt="People working with computers"/>
            </HeroImageStyled>
        </HeroMain>
    );
}

export default Hero;