import styled from "styled-components";

export const Modal = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
  transition: all 0.3s linear;
  transform: ${({isOpen}) => isOpen ? 'translateX(0%)' : 'translateX(100%)'};
  @media screen and (max-width: 230px) {
    width: 80%;
  }

  @media screen and (min-width: 587px) {
    display: none;
  }
`;