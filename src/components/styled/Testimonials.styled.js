import styled from "styled-components";

export const TestimonialsStyled = styled.div`
  display: flex;
  margin: 5rem 0;
  column-gap: 1.5rem;
  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    row-gap: 1.5rem;
    flex-direction: column;
  }
`;
export const TestimonialStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #25282C;
`;
export const TestimonialAvatar = styled.div`
  position: relative;
  margin: 1.5rem 0 1rem 1.5rem;
  & > img {
    width: 3rem;
    height: 3rem;
  }
`;
export const TestimonialSVG = styled.svg`
  position: absolute;
  left: 37px;
`;
export const TestimonialParagraph = styled.p`
  margin: 0 0 1.25rem 1.5rem;
  font-size: 1rem;
  color: #33363A;
  & > span:nth-child(1) {
    color: #D9E3EA;
  }
  & > span:nth-child(2) {
    color: #5D5DFF;
  }
`;