import styled from "styled-components";
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  text-decoration: none;
  line-height: 1.5rem;
  font-size: 1rem;
  color: ${({color}) => color || "#5D5DFF"};
  border: none;
  background: ${({background}) => background || "#5D5DFF"};
  margin-left: ${({left}) => left || "0"};
`