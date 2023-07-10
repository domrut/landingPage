import React from 'react';
import RegisterComp from "../components/RegisterComp";
import {Container} from "../components/styled/Container.styled";
import Header from "../components/Header";
import {LoginHeader} from "../components/styled/Login.styled";
import {Text} from "../Texts";

function Register() {
    return (
        <Container>
            <Header isAuth/>
            <LoginHeader>{Text.registerPageHeader}</LoginHeader>
            <RegisterComp/>
        </Container>
    );
}

export default Register;