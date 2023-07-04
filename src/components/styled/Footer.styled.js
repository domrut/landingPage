import styled from "styled-components";
import {CardHeader} from "./FirstSection.styled";

export const FooterStyled = styled.footer`
   margin-top: 5rem;
`;
export const FooterBanner = styled.div`
  display: flex;
  background: #5D5DFF;
  overflow: hidden;
  padding: 3rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    flex-direction: column;
  }
`;
export const FooterHeader = styled(CardHeader)`
  line-height: 2.625rem;
  font-size: 2rem;
  text-align: left;
  margin: 0.5rem 0;
`;
export const FooterInput = styled.input`
  border-radius: 0.125rem;
  border: 1px solid #8D8DFF;
  background: #4B4ACF;
  padding: 0.75rem 1rem;
  outline: none;
  color: #FFF;
  width: 20rem;
  min-width: 5.25rem;
  height: 3rem;
  ::placeholder {
    color: #ABABFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.01563rem;
  }
  @media screen and (max-width: 495px) {
    max-width: 20rem;
    width: auto;
  }
`;
export const FooterSVG = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
`;
export const FooterForm = styled.div`
  display: flex;
  @media screen and (max-width: 930px) {
    flex-direction: column;
    & > a {
      margin: 0.5rem 0 0 0;
    }
  }
  @media screen and (min-width: 567px) and (max-width: ${({theme}) => theme.tablet}) {
    flex-direction: row;
    margin: 2rem 0 0 0;
    & > a {
      margin: 0 0 0 0.5rem;
    }
  }
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;
export const FooterListItem = styled.li`
  color: #9BA9B4;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  list-style: none;
  margin-bottom: 0.25rem;
  line-height: 1.375rem;
  &:nth-child(1) > a {
    color: #D9E3EA;
    font-weight: 500;
    cursor: default;
    pointer-events: none;
  }
  & > a {
    text-decoration: none;
    color: #9BA9B4;
  }
  & > a:hover {
    color: #D9E3EA;
  }
`;

export const FooterItemsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
export const FooterListContainer = styled.div`
  column-gap: 5rem;
  margin-left: 0.5rem;
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    margin-top: 0.5rem;
    margin-left: 0;
  }
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    margin-top: 2rem;
    row-gap: 2rem;
    flex-direction: column;
  }
`;
export const FooterListOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    flex-direction: column;
  }
`;
export const FooterSocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 4rem;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    flex-direction: column-reverse;
  }
  & > p {
    text-align: left;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;
export const FooterSocialSVGs = styled.div`
  display: flex;
  & > a:hover {
    scale: 2;
  }
`;