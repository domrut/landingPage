import styled from "styled-components";
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  text-decoration: none;
  line-height: 1.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5.25rem;
  max-width: ${({maxWidth}) => maxWidth || "inherit"};
  color: ${({color}) => color || "#5D5DFF"};
  border: none;
  background: ${({background}) => background || "#5D5DFF"};
  margin-left: ${({left}) => left || "0"};
  &:hover {
    scale: 1.03;
    transition: 0.4s ease;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`

export const HeroButton = styled(Button)`
  @media screen and (max-width: 340px) {
    margin-left: 0;
    text-align: center;
    &:nth-child(2) {
      margin-top: 0.75rem;
    }
  }
`;