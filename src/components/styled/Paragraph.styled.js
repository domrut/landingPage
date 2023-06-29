import styled from "styled-components";

export const Paragraph = styled.p`
  color: #9BA9B4;
  text-align: center;
  font-size: ${({fontSize}) => fontSize || "1.25rem"};
  font-style: normal;
  max-width: ${({maxWidth}) => maxWidth || "670px"};
  margin: 0;
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: -0.01563rem;
`;