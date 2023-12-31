import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${({color}) => color || "#9BA9B4"};
  text-align: ${({textAlign}) => textAlign || "center"};
  font-size: ${({fontSize}) => fontSize || "1.25rem"};
  font-style: normal;
  max-width: ${({maxWidth}) => maxWidth || "670px"};
  margin: ${({margin}) => margin || 0};
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: -0.01563rem;
  & > a {
    color: #9BA9B4;
  }
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    font-size: 1.125rem;
  }
`;