import styled from "styled-components";

export const Heading2 = styled.h2`
  color: #D9E3EA;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  margin-top: ${({marginTop}) => marginTop || "0"};
  max-width: 50rem;
  font-weight: 800;
  line-height: 3.125rem;
  letter-spacing: -0.03125rem;
  @media screen and (max-width: ${({theme}) => theme.mobileSM}) {
    font-size: 1.8rem;
  }
`;
export const FirstSectionHeader = styled.div`
  text-align: -webkit-center;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.25rem;
  gap: 2rem;
`;
export const CardHeader = styled.h4`
  color: #D9E3EA;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  margin: 1rem 0;
  font-weight: 700;
  line-height: 2.125rem;
  letter-spacing: -0.01563rem;
`;
export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 300px;
  align-items: center;
  & > p {
    max-width: 340px;
  }
`;