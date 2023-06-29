import React from 'react';
import {HeroButton} from "./styled/Button.styled";
import {Text} from "../Texts";
import {Heading1, HeroMain, HeroImageStyled, Buttons} from "./styled/Hero.styled";
import {Paragraph} from "./styled/Paragraph.styled";
import heroImage from "../assets/HeroImage.png";
function Hero() {
    return (
        <HeroMain>
            <Heading1>{Text.heading1}</Heading1>
            <Paragraph>{Text.heroParagraph}</Paragraph>
            <Buttons>
                <HeroButton as="a" href="#" color="#fff">{Text.heroButtons.first}</HeroButton>
                <HeroButton as="a" href="#" color="#fff" background="#33363A" left="0.75rem">{Text.heroButtons.second}</HeroButton>
            </Buttons>
            <HeroImageStyled>
                <img src={heroImage} alt="People working with computers"/>
            </HeroImageStyled>
        </HeroMain>
    );
}

export default Hero;