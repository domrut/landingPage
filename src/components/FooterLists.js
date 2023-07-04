import React from 'react';
import {FooterListItem, FooterItemsList} from "./styled/Footer.styled";

function FooterLists({items}) {
    return (
        <FooterItemsList>
            {items.map((el, i) => {
                return <FooterListItem key={i}><a href="#">{el}</a></FooterListItem>
            })}
        </FooterItemsList>
    );
}

export default FooterLists;