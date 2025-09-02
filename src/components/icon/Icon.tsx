import React from 'react';
import './Icon.css';
import IconSprite from './sprite.svg';
import styled from 'styled-components';

type IconsPropsType = {
    Iconid?: string; // Сделать Iconid необязательным
    children?: React.ReactNode; // Разрешить children
};

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 135px; /* Размер контейнера */
    height: 135px;
    background-color: #f0f4ff; /* Цвет фона */
    border-radius: 20px; /* Скругление углов */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Тень */
    margin: 10px; /* Расстояние между иконками */
`;
const IconTitle = styled.div`
    margin-top: 10px; /* Отступ от иконки */
    font-size: 14px; /* Размер текста */
    text-align: center; /* Выравнивание текста */
    color: #333; /* Цвет текста */
`;

export const ContactIcon = (props: IconsPropsType) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.Iconid}`}/>
        </svg>
    );
};
export const IconCard  = (props: IconsPropsType) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.Iconid}`}/>
        </svg>
    );
};
export const IconCardContainer = (props: IconsPropsType) => {
    return (
        <CardContainer>
            <IconWrappers>
            <IconCard Iconid={props.Iconid}/>
            </IconWrappers>
            <Card>
                <IconTitle>{props.Iconid}</IconTitle>
            </Card>
        </CardContainer>


    );
};


export const ContactIconIconWrapper = (props: IconsPropsType) => {
    return (
        <ContactIconContainer>
            <ContactIcon Iconid={props.Iconid}/>
        </ContactIconContainer>
    );
};

export const SkillIcon = (props: IconsPropsType) => {
    return (
        <svg width="96" height="96" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.Iconid}`}/>
        </svg>

    );
};

export const SkillIconWrapper = (props: IconsPropsType) => {
    return (
        <div>
            <IconWrapper>
                <SkillIcon Iconid={props.Iconid}/>
                <IconTitle>{props.Iconid}</IconTitle>
            </IconWrapper>
        </div>


    );
};
const IconWrappers = styled.div`
    position: absolute;
    top: -35px; /* Поднимет иконку над карточкой */
    width: 60px; /* Диаметр круга */
    height: 60px; /* Диаметр круга */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; /* Делаем круг */
    background-color: white; /* Фон */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Добавляем тень для объема */
`;


const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    height: 75px;
    width: 125px;
    padding: 15px;
    background-color: #a7c8ef;
    border-radius: 20px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;



const CardTitle = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

const ContactIconContainer = styled.div.attrs(() => ({
    className: "contact-icon-container"
}))``;