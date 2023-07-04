import styled from "styled-components";

export const Pill = styled.div`
  border-radius: 0.9375rem;
  background: #C6F6D5;
  display: flex;
  box-shadow: 0 1px 3px 0 rgba(25, 32, 44, 0.04);
  max-width: 11.625rem;
  height: 1.875rem;
  justify-content: center;
  margin: 5rem auto 0 auto;
  & > p {
    color: #36A269;
    align-self: center;
    font-size: 0.775rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
  }
`;
export const TabStyled = styled.div`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? "row-reverse" : "row"};
  margin-top: 5rem;
  column-gap: 4rem;
  justify-content: space-between;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 1380px){
    justify-content: space-evenly;
  }
`;
export const TabHeader = styled.h3`
  color: #D9E3EA;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  margin: 0.5rem 0;
  line-height: 2.625rem;
  letter-spacing: -0.01563rem;
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    font-size: 1.8rem;
  }
`;
export const TabImage = styled.img`
  width: 33.75rem;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    margin-top: 1rem;
  }
`;

export const TabSpan = styled.span`
  color: ${({color}) => color || "#5D5DFF"};
  font-size: ${({fontSize}) => fontSize || "1.25rem"};
  font-style: normal;
  margin: ${({margin}) => margin || 0};
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: 0.01563rem;
`;

export const TabSVG = styled.svg`
  margin-right: 0.5rem;
`;