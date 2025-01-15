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
        <Card>
            <CardContainer>
                <IconCard Iconid={props.Iconid}/>
                <IconTitle>{props.Iconid}</IconTitle>
            </CardContainer>
        </Card>

    );
};
/*export const IconCardContainer = ({ children }: { children: React.ReactNode }) => {
    return <CardContainer>{children}</CardContainer>;
};*/

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
        <IconWrapper>
            <IconTitle>{props.Iconid}</IconTitle>
            <SkillIcon Iconid={props.Iconid}/>
        </IconWrapper>
    );
};


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 15px;
    background-color: #edf4fc;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const CardContainer = styled.div`
    width: 120px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #edf4fc; /* Цвет фона */
    border-radius: 25px 25px 0 0; /* Скруглённые углы сверху */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легкая тень */
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`;

const CardTitle = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;
const ContactIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px; /* Укажите размер, соответствующий вашим иконкам */
    height: 55px;
    border: 3px solid rgba(0, 0, 285, 0.1); /* Светлый синий цвет обводки */
    border-radius: 50%; /* Круглая форма */
    background-color: rgba(0, 0, 285, 0.05); /* Легкий фон */
    transition: background 0.3s ease, transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        background-color: rgba(0, 0, 255, 0.2); /* Темнее при наведении */
    }
`;