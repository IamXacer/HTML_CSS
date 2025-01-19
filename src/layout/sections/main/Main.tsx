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

            <IconCardWraper>
                <IconCardContainer Iconid={'CSS'}/>
                <IconCardContainer Iconid={'PostMan'}/>
                <IconCardContainer Iconid={'GitHub'}/>
                <IconCardContainer Iconid={'WebStorm'}/>
            </IconCardWraper>

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

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;


const IconCardWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 колонки для больших экранов */
    justify-content: center;
    align-items: center;
    gap: 20px; /* Расстояние между иконками */
    margin-top: 40px; /* Добавляем отступ сверху */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); /* 3 колонки для планшетов */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 колонки для небольших экранов */
        margin-top: 30px; /* Уменьшаем отступ для планшетов */
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* 1 колонка для мобильных устройств */
        margin-top: 20px; /* Ещё меньше для мобильных */
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column; /* Располагаем элементы вертикально */
        align-items: center;
        text-align: center; /* Центрируем текст */
    }
`;

const TextBlock = styled.div`
    max-width: 600px; /* Ограничиваем максимальную ширину текста */
    width: 100%; /* Занимаем всю доступную ширину */
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 768px) {
        text-align: center;
    }
    margin-bottom: 40px; /* Отступ снизу, чтобы текст не наплывал на иконки */
`;







const Name = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 28px; /* Уменьшаем размер текста для планшетов */
    }

    @media (max-width: 480px) {
        font-size: 24px; /* Ещё меньший размер для мобильных */
        margin: 5px 0;
    }
`;


const MainTitle = styled.h1`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
    text-align: left;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
        line-height: 1.4;
    }
`;





const StyledImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(14, 207, 22, 0.1);

    @media (max-width: 768px) {
        width: 300px; /* Уменьшаем ширину для планшетов */
    }

    @media (max-width: 480px) {
        width: 100%; /* Изображение занимает всю ширину */
        max-width: 250px; /* Ограничиваем максимальную ширину */
    }
`;



