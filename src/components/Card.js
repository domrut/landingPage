import React from 'react';
import {Paragraph} from "./styled/Paragraph.styled";
import {CardHeader, CardStyled} from "./styled/FirstSection.styled";

function Card({header, paragraph, svg}) {
    return (
        <CardStyled>
            {svg}
            <CardHeader>{header}</CardHeader>
            <Paragraph fontSize="1.125rem">{paragraph}</Paragraph>
        </CardStyled>
    );
}

export default Card;