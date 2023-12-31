import React from 'react';
import {TestimonialAvatar, TestimonialParagraph, TestimonialStyled, TestimonialSVG} from "./styled/Testimonials.styled";
import {Text} from "../Texts";
import {Paragraph} from "./styled/Paragraph.styled";
import firstImage from "../assets/TestimonialOne.webp"
import secondImage from "../assets/TestimonialTwo.webp"
import thirdImage from "../assets/TestimonialThree.webp"
import {Divider} from "./styled/Divider.styled";

function Testimonial({element}) {
    const images = [firstImage, secondImage, thirdImage];
    return (
        <TestimonialStyled>
            <TestimonialAvatar>
                <img src={images[element]} loading="lazy" alt="TestimonialAvatar"/>
                <TestimonialSVG width="24" height="19" viewBox="0 0 24 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1.83333 6.23429C0.611105 8.743 0 11.1705 0 13.517V18.0476H7.21631V13.4047C7.21631 11.4326 7.52837 9.57923 8.15248 7.84435C8.7766 6.10947 9.72576 4.39334 11 2.69591L6.86525 0C4.73285 1.64751 3.05556 3.72558 1.83333 6.23429ZM14.8333 6.23429C13.6111 8.743 13 11.1705 13 13.517V18.0476H20.2163V13.4047C20.2163 11.4326 20.5284 9.57923 21.1525 7.84435C21.7766 6.10947 22.7258 4.39334 24 2.69591L19.8652 0C17.7328 1.64751 16.0556 3.72558 14.8333 6.23429Z"
                          fill="#5D5DFF"/>
                </TestimonialSVG>
            </TestimonialAvatar>
            <Paragraph margin="0 1.5rem" fontSize="1.125rem" textAlign="left">{Text.testimonialText[element]}</Paragraph>
            <Divider margin="1.5rem 2rem 1.25rem 1.5rem"/>
            <TestimonialParagraph>
                <span>
                    {Text.testimonialBottomText[element].split("/")[0]}
                </span>
                /
                <span>
                    {Text.testimonialBottomText[element].split("/")[1]}
                </span>
            </TestimonialParagraph>
        </TestimonialStyled>
    );
}

export default Testimonial;