    import React from 'react';
    import './Icon.css';
    import IconSprite from './sprite.svg';
    import styled from 'styled-components';

    type IconsPropsType = {
        Iconid:string
    }
    const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 135px; /* Размер контейнера */
        height: 135px;
        background-color: #f0f4ff; /* Цвет фона */
        border-radius: 20px; /* Скругление углов */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Тень */
        margin: 10px; /* Расстояние между иконками */
    `;

    export const ContactIcon = (props: IconsPropsType) => {
        return (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${IconSprite}#${props.Iconid}`} />
            </svg>
        );
    };

    export const SkillIcon = (props: IconsPropsType) => {
        return (
            <svg width="96" height="96" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <use xlinkHref={`${IconSprite}#${props.Iconid}`}/>
            </svg>

        );
    };
    export const SkillIconWrapper = (props: IconsPropsType) => {
        return (
            <IconWrapper>
                <SkillIcon Iconid={props.Iconid} />
            </IconWrapper>
        );
    };
