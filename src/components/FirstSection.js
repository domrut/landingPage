import React from 'react';
import {Heading2, FirstSectionHeader} from "./styled/FirstSection.styled";
import {Paragraph} from "./styled/Paragraph.styled";
import {Text} from "../Texts";
import Cards from "./Cards";

function FirstSection() {
    return (
        <section>
            <FirstSectionHeader>
                <Heading2 marginTop="8rem">{Text.heading2}</Heading2>
                <Paragraph>{Text.firstSectionParagraph}</Paragraph>
            </FirstSectionHeader>
            <Cards/>
        </section>
    );
}

export default FirstSection;