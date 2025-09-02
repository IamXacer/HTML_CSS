import photo from "../../../icons/image.jpg";
import SocialnetworksIcon from '../../../icons/SocialnetworksIcon.jpg';
import Todolist from '../../../icons/Todolist.jpg';
import portfolio from '../../../icons/portfolio.png';
import CounterRedux from '../../../icons/CounterRedux.webp';
import counter from '../../../icons/counter.webp';

import React from "react";
import styled from "styled-components";

export const MyProjects = () => {
    return (
        <StyleMyProjects>
            <SectionTitle>MyProjects</SectionTitle>
            <Socialnetworks>
                <IconWrapper>
                    <img src={SocialnetworksIcon} alt="social networks" />
                </IconWrapper>
                <IconWrapper>
                    <img src={Todolist} alt="Todolist" />
                </IconWrapper>
                <IconWrapper>
                    <img src={portfolio} alt="portfolio" />
                </IconWrapper>
                <IconWrapper>
                    <img src={CounterRedux} alt="CounterRedux" />
                </IconWrapper>
                <IconWrapper>
                    <img src={counter} alt="counter" />
                </IconWrapper>
            </Socialnetworks>
        </StyleMyProjects>

    );
};

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 335px; /* Размер контейнера */
    height: 335px;
    background-color: #f0f4ff; /* Цвет фона */
    border-radius: 20px; /* Скругление углов */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Тень */
    margin: 10px; /* Расстояние между иконками */

    /* Ограничення для зображень */
    img {
        max-width: 100%; /* Задаємо максимальну ширину для зображень */
        max-height: 100%; /* Задаємо максимальну висоту для зображень */
        object-fit: contain; /* Забезпечуємо правильне масштабування зображень */
    }
`;

const SectionTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background: #0073e6;
        margin: 10px auto 0;
    }
`;

const StyleMyProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-color: #f9f9f9;
`;

const Socialnetworks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 картинки в ряду */
    gap: 20px; /* Відступ між картинками */
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 картинки на ряд для планшетів */
        gap: 25px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 картинки на ряд для мобільних */
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Одна картинка на ряд для маленьких екранів */
        gap: 15px;
    }
`;

