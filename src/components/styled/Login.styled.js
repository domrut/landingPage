import styled from "styled-components";
import {Heading1} from "./Hero.styled";
import {Button} from "./Button.styled";

export const LoginHeader = styled(Heading1)`
  margin: 5rem 0;
  word-wrap: break-word;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25rem;
  margin: 0 auto;
`;
export const GoogleButton = styled(Button)`
  height: 3rem;
`;
export const GoogleButtonContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  & > svg {
    position: absolute;
    margin: 0.75rem 0 0.69rem 1rem;
  }
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    & > svg {
      display: none;
    }
  }
`;
export const SignInText = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    & > svg {
      display: none;
    }
    & {
      justify-content: center;
    }
    & > span {
      text-align: center;
    }
  }
  & > span {
    color: #9BA9B4;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.01563rem;
  }
`;