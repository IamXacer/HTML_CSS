import React from "react";
import photo from '../../../icons/image.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";


export const Main = () => {
    return(
        <StyleMain>
            <FlexWrapper align={"center"} justify={"space-around"} direction={"row"}>
                <TextBlock>
                    <span>Hello, I’m</span>
                    <Name>I am Oleksander Verlanov</Name>
                    <MainTitle>I am a front-end developer from Ukraine ua. I love designing, programming, creating and creating
                        things.</MainTitle>

                </TextBlock>
                <StyledImage src={photo}/>
            </FlexWrapper>
        </StyleMain>



    )
}

const Name = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
`;
const StyleMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fef8f5; /* Светлый бежевый цвет */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;
const TextBlock = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left; /* Выравнивание текста */
`;


const StyledImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 15px; /* Более сильное округление */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легкая тень */
`;

const MainTitle = styled.h1`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
`;