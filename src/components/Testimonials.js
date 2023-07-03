import React from 'react';
import {TestimonialsStyled} from "./styled/Testimonials.styled";
import {FirstSectionHeader, Heading2} from "./styled/FirstSection.styled";
import {Text} from "../Texts";
import {Paragraph} from "./styled/Paragraph.styled";
import Testimonial from "./Testimonial";

function Testimonials() {
    return (
        <section>
            <FirstSectionHeader>
                <Heading2 marginTop="5rem">{Text.testimonialHeader}</Heading2>
                <Paragraph maxWidth="800px">{Text.testimonialHeaderParagraph}</Paragraph>
            </FirstSectionHeader>
            <TestimonialsStyled>
                {Text.testimonialText.map((el, i) => {
                    return <Testimonial key={i} element={i}/>
                })}
            </TestimonialsStyled>
        </section>
    );
}

export default Testimonials;