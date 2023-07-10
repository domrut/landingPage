import React, {useEffect, useRef, useState} from 'react';
import {FormButton, FormStyled, InputStyled, FormForgotSection, NoAccountParagraph} from "./styled/Form.styled";
import {Text} from "../Texts";
import {Link} from "react-router-dom";
import {Paragraph} from "./styled/Paragraph.styled";

function Form({isLogin}) {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    const inputs = {
        fullName: useRef(),
        companyName: useRef(),
        email: useRef(),
        password: useRef()
    }
    const checkboxHandle = () => {
        setChecked(!checked);
    }
    const validateForm = () => {
        setError("")
        const passwordRegex = new RegExp(`(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=[\\]{};':"\\\\|,.<>/?]).+$`);
        const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!isLogin) {
            if (inputs.fullName.current.value === "") return setError("Enter your full name");
            if (inputs.companyName.current.value === "") return setError("Enter your company or app name");
        }
        if (!emailRegex.test(inputs.email.current.value)) return setError("Email has to be correct format")
        if (inputs.password.current.value.length < 8 || inputs.password.current.value.length > 20) return setError("Password must be between 8 and 20 characters");
        if (!passwordRegex.test(inputs.password.current.value)) return setError("Password must have at least one capital letter and one special symbol");
    }

    return (
        <FormStyled>
            {error !== "" ? <Paragraph fontSize="1rem" color="red">{error}</Paragraph> : ""}
            {!isLogin &&
                <section>
                    <InputStyled>
                        <label htmlFor="fullName">
                            <span>{Text.inputFullName}</span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="text" id="fullName" name="fullName" placeholder="First and last name"
                               ref={inputs.fullName} required/>
                    </InputStyled>
                    <InputStyled>
                        <label htmlFor="companyName">
                            <span>{Text.inputCompanyName}</span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="text" id="companyName" name="companyName" placeholder="Your company or app name"
                               ref={inputs.companyName} required/>
                    </InputStyled>
                </section>
            }
            <section>
                <InputStyled>
                    <label htmlFor="mail">
                        <span>{Text.inputEmail}</span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="email" id="mail" name="usermail" placeholder="E-mail" ref={inputs.email} required/>
                </InputStyled>
                <InputStyled>
                    <small>(Capital letter, special symbol, min 8 characters)</small>
                    <label htmlFor="password">
                        <span>{Text.inputPassword}</span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="password" id="password" autoComplete="on" name="userpassword" placeholder="Password"
                           ref={inputs.password} required/>
                </InputStyled>
                {isLogin ? <FormForgotSection>
                        <span>
                            <input type="checkbox" id="checkbox" name="checkbox" onChange={checkboxHandle}/>
                            <label htmlFor="checkbox">
                                <span>{Text.inputKeepMe}</span>
                            </label>
                        </span>
                        <Link to="#">{Text.inputForgot}</Link>
                    </FormForgotSection> :
                    <Paragraph fontSize="0.875rem!important" color="#707D86">{Text.registerPrivacy} <Link to="#">Privacy
                        Policy</Link></Paragraph>
                }
                <FormButton color="#fff" onClick={validateForm} type="button">{Text.navButtons.first}</FormButton>
                {isLogin ? <NoAccountParagraph>
                    {Text.inputNoAccount}
                    <Link
                        to="/register">{Text.navButtons.second}
                    </Link>
                </NoAccountParagraph> :
                    <NoAccountParagraph>
                        {Text.alreadyRegistered}
                        <Link
                            to="/login">{Text.navButtons.first}
                        </Link>
                    </NoAccountParagraph>
                }
            </section>
        </FormStyled>
    );
}

export default Form;