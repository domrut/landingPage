import React from 'react';
import {HamburgerStyled} from "./styled/Hamburger.styled";
import {updateHamburger} from "../features/hamburgerReducer";
import {useDispatch, useSelector} from "react-redux";
function Hamburger() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.hamburger)

    return (
        <>
            <HamburgerStyled onClick={() => dispatch(updateHamburger(!store.isOpen))} isOpen={store.isOpen}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerStyled>
        </>
    );
}

export default Hamburger;