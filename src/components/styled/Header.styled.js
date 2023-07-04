import styled from "styled-components";

export const HamburgerStyled = styled.div`
  width: 2rem;
  height: 2rem;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  & > div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({isOpen}) => isOpen ? "#000" : "#fff"};
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  @media screen and (max-width: ${({theme}) => theme.mobile}){
    display: flex;
  }
  & > div:nth-child(1) {
    transform: ${({isOpen}) => isOpen && 'rotate(47deg)'};
  }
  & > div:nth-child(2) {
    transform: ${({isOpen}) => isOpen && 'translateX(100%)'};
    opacity: ${({isOpen}) => isOpen && '0'};
  }
  & > div:nth-child(3) {
    transform: ${({isOpen}) => isOpen && 'rotate(-47deg)'};
  }
`
export const SVG = styled.svg`
  position: absolute;
`
export const SVG1 = styled(SVG)`
  right: 0;
`
export const SVG2 = styled(SVG)`
  right: 55vw;
  top: 40vh;
`
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  
  & > a:nth-child(1) {
    margin-bottom: 1rem;
  }
`;

export const Nav = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`;
export const Menu = styled.div`
  align-self: center;
  z-index: 1;
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    display: none;
  }
`;
export const Modal = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 1);
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  transition: all 0.3s linear;
  transform: ${({isOpen}) => isOpen ? 'translateX(0%)' : 'translateX(100%)'};
  @media screen and (max-width: 230px) {
    width: 80%;
  }

  @media screen and (min-width: ${({theme}) => theme.mobile}) {
    display: none;
  }
`;