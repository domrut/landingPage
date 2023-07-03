import React from 'react';
import {FirstSectionHeader, Heading2} from "./styled/FirstSection.styled";
import {Text} from "../Texts";
import {Paragraph} from "./styled/Paragraph.styled";
import {Pill} from "./styled/SecondSection.styled";
import Tab from "./Tab";
import {Divider} from "./styled/Divider.styled";

function SecondSection() {
    return (
        <section>
            <Pill><p>{Text.secondSectionHeaderPill}</p></Pill>
            <FirstSectionHeader>
                <Heading2 marginTop="1.25rem">{Text.secondSectionHeader}</Heading2>
                <Paragraph maxWidth="740px">{Text.firstSectionParagraph}</Paragraph>
            </FirstSectionHeader>
            {Text.tabHeader.map((el, i) => {
                return <Tab key={i} element={i}/>
            })}
            <Divider/>
        </section>
    );
}

export default SecondSection;