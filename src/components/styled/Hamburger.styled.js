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
  @media screen and (max-width: 587px){
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