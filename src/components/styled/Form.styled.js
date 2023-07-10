import styled from "styled-components";
import {Button} from "./Button.styled";

export const FormStyled = styled.form`
  width: 100%;
  & > section {
    display: flex;
    flex-direction: column;
  }
`;
export const FormForgotSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1.5rem 0;
  color: #9BA9B4;
  & > span > input[type="checkbox"] {
    margin-right: 10px;
  }
  & > span > input[type="checkbox"]:checked {
    accent-color: #5D5DFF;
  }
  & > a {
    color: #5D5DFF;
    text-decoration: none;
  }
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    flex-direction: column;
    & > a {
      margin-top: 0.75rem;
    }
  }
`;
export const InputStyled = styled.p`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 1rem 0;
  & > small {
    color: #707D86;
  }
  & > label > span {
    color: #C5D2DC;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
  & > label > strong {
    color: #E53D3E;
  }
  & > label {
    margin-bottom: 0.25rem;
  }
  & > label > strong > span {
    color: #E53D3E;
    margin-left: 2px;
  }
  & > input {
    border-radius: 0.125rem;
    border: 1px solid #33363A;
    padding: 0.75rem 0 0.75rem 1rem;
    background: transparent;
    color: #fff;
  }
  & > input::placeholder {
    color: #707D86;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.01563rem;
  }
`;
export const NoAccountParagraph = styled.p`
  display: flex;
  justify-content: center;
  color: #9BA9B4;
  & > a {
    margin-left: 5px;
    color: #5D5DFF;
    text-decoration: none;
  }
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    flex-direction: column;
    & > a {
      margin-top: 0.75rem;
      margin-left: 0;
    }
  }
`;
export const FormButton = styled(Button)`
  height: 3rem;
  margin: 1.5rem 0;
`;