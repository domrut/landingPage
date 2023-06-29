import React from 'react';
import {CardsContainer} from "./styled/FirstSection.styled";
import Card from "./Card";
import {Text} from "../Texts";
import {Divider} from "./styled/Divider.styled";

function Cards() {

    const svgs = [<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
        <path d="M30 39.313L25.82 41.51L27 34.628L22 29.754L28.91 28.75L32 22.49L35.09 28.75L42 29.754L39 32.678"
              stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
        <path d="M43 42H34" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
        <path d="M43 37H34" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
    </svg>, <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
        <mask id="mask0_0_124" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="64"
              height="64">
            <rect width="64" height="64" rx="32" fill="white"/>
        </mask>
        <g mask="url(#mask0_0_124)">
        </g>
        <rect x="21" y="23" width="22" height="18" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
        <path d="M26 28H38" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
        <path d="M26 32H38" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
        <path d="M26 36H31" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
    </svg>
        , <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
            <ellipse cx="32" cy="32" rx="5.5" ry="11" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M32 21V43" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M21 32H43" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
            <circle cx="32" cy="32" r="11" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
        </svg>
        , <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
            <path
                d="M39 43V36.7C40.8762 35.0274 41.9645 32.6443 42 30.131C42.0206 25.2313 38.1579 21.1949 33.262 21C30.83 20.9292 28.4729 21.846 26.728 23.5416C24.9831 25.2372 23.999 27.567 24 30V31L22 36L24 37V41C24 42.1046 24.8954 43 26 43H30C31.3261 43 32.5979 42.4732 33.5355 41.5355C34.4732 40.5979 35 39.3261 35 38V33"
                stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
            <circle cx="35" cy="30" r="3" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
        </svg>
        , <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
            <path
                d="M29 42H39.229C40.1072 42.0002 40.8828 41.4274 41.141 40.588L43.91 31.588C44.0965 30.9817 43.9843 30.3228 43.6076 29.8124C43.2309 29.3019 42.6344 29.0005 42 29H35V25C35 22.627 33.749 21.506 32.236 21.14C31.9369 21.0698 31.6222 21.14 31.3814 21.3308C31.1406 21.5215 31.0001 21.8118 31 22.119V26L26 32"
                stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
            <rect x="22" y="30" width="4" height="12" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
        </svg>
        , <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#5D5DFF"/>
            <path d="M38 24V22" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M40.121 24.879L41.536 23.464" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M41 27H43" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M40.121 29.121L41.536 30.536" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M38 30V32" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M35.879 29.121L34.464 30.536" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M35 27H33" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path d="M35.879 24.879L34.464 23.464" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <circle cx="38" cy="27" r="3" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square"/>
            <path
                d="M29.86 23.18C24.8 23.988 21 27.6 21 32C21 37 25.9 41 32 41C33.0475 41.0213 34.0923 40.8865 35.1 40.6L41 43L40.4 37.8C41.2506 36.9575 41.9272 35.9558 42.391 34.852"
                stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square"/>
        </svg>
    ]

    return (
        <>
            <CardsContainer>
                {Text.cardHeaders.map((el, i) => {
                    return <Card header={el} svg={svgs[i]} paragraph={Text.cardParagraphs[i]} key={i}/>
                })}
            </CardsContainer>
            <Divider/>
        </>
    );
}

export default Cards;