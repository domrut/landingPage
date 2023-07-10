import React from 'react';
import LoginComp from "../components/LoginComp";
import {Container} from "../components/styled/Container.styled";
import Header from "../components/Header";
import {Text} from "../Texts";
import {LoginHeader} from "../components/styled/Login.styled";

function Login() {
    return (
        <Container>
            <Header isAuth/>
            <LoginHeader>{Text.loginPageHeader}</LoginHeader>
            <LoginComp/>
        </Container>
    );
}

export default Login;