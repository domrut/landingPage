import React from 'react';
import {TabHeader, TabImage, TabStyled, TabSpan, TabSVG} from "./styled/SecondSection.styled";
import {Text} from "../Texts";
import {Paragraph} from "./styled/Paragraph.styled";
import firstTabImage from "../assets/tabOne.webp"
import secondTabImage from "../assets/tabTwo.webp"
import thirdTabImage from "../assets/tabThree.webp"
import {Flex} from "./styled/Flex.styled";

function Tab({element}) {
    const images = [firstTabImage, secondTabImage, thirdTabImage];
    return (
        <TabStyled reverse={element === 1}>
            <Flex flexDirection="column" justifyContent="center">
                <TabSpan>{Text.tabSpan[element]}</TabSpan>
                <TabHeader>{Text.tabHeader[element]}</TabHeader>
                <Paragraph margin="0 0 1rem 0" textAlign="left" maxWidth="530px">{Text.tabParagraph[element]}</Paragraph>
                {Text.tabTickSpan.map((el, i) => {
                    return (
                        <TabSpan margin="0.25rem 0" fontSize="1rem" color="#9BA9B4" key={i}>
                            <TabSVG width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                d="M10.2807 0.280712L3.98771 6.57371L1.69471 4.28071C1.30233 3.90174 0.678627 3.90716 0.292893 4.29289C-0.0928404 4.67863 -0.0982602 5.30233 0.280712 5.69471L3.28071 8.69471C3.67121 9.08509 4.30421 9.08509 4.69471 8.69471L11.6947 1.69471C12.0737 1.30233 12.0683 0.678627 11.6825 0.292893C11.2968 -0.0928404 10.6731 -0.0982602 10.2807 0.280712Z"
                                fill="#48BB78"/>
                            </TabSVG>
                        {el}
                        </TabSpan>)
                })}
            </Flex>
            <div>
                <TabImage src={images[element]} width="540px" height="403px" loading="lazy" alt="TabImage"/>
            </div>
        </TabStyled>
    );
}

export default Tab;