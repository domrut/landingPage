import styled from "styled-components";

export const Heading1 = styled.h1`
  color: #D9E3EA;
  text-align: center;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 3.875rem;
  letter-spacing: -0.03125rem;
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    & {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    font-size: 1.8rem;
  }
`;
export const HeroImageStyled = styled.div`
  margin-top: 4rem;
  z-index: 1;
  background: black;
  border-radius: 20px;
  & > img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 1024px;
    max-height: 576px;
    border-radius: 20px;
  }
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    & > img {
      display: none;
    }
  }
`;
export const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
export const Buttons = styled.div`
  margin-top: 2.75rem;
  display: flex;
  z-index: 1;
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    flex-direction: column;
  }
`;