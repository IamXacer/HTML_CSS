import React from "react";
import photo from '../../../icons/image.jpg';
import styled from "styled-components";
import {IconCard, IconCardContainer} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyleMain>
            <FlexWrapper>
                <TextBlock>
                    <span>Hello, I’m</span>
                    <Name>I am Oleksander Verlanov</Name>
                    <MainTitle>I am a front-end developer from Ukraine ua.
                        I love designing, programming, creating and creating
                        things.</MainTitle>
                </TextBlock>
                <StyledImage src={photo} />
            </FlexWrapper>
            <IconSection>

            <IconCardContainer Iconid={'CSS'}/>
            </IconSection>
        </StyleMain>
    );
};

const StyleMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fef8f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
`;

const TextBlock = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Name = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
`;

const MainTitle = styled.h1`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
`;

const StyledImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(14, 207, 22, 0.1);
`;

const IconSection = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
`;


