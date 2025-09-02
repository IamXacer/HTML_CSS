import styled from "styled-components";

type ButtonCardPropsType = {
    bgColor?: string;
    textColor?: string;
    hover?: string;
    hoverText?: string;
    border?: string;
};

export const Button = styled.button<ButtonCardPropsType>`
    width: 86px;
    height: 30px;
    background-color: ${(props) => props.bgColor || '#ffff'};
    color: ${(props) => props.textColor || '#000000'};
    border: 2px solid ${(props) => props.border || '#4e71fe'};
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    padding: 5px 10px; /* Удобный внутренний отступ */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Легкая тень для объёмности */

    &:hover {
        
        background-color: ${(props) => props.hover || '#4e71fe'};
        color: #fff; /* Оставляем текст белым */
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15); /* Более глубокая тень при наведении */
    }

    &:focus {
        outline: 2px solid ${(props) => props.border || '#4e71fe'}; /* Фокусное состояние */
        outline-offset: 2px; /* Расстояние между контуром и кнопкой */
    }

    &:active {
        transform: scale(0.98); /* Эффект нажатия */
        background-color: #fff; /* Сохраняем белый фон */
        color: ${(props) => props.bgColor || '#4e71fe'}; /* Сохраняем синий текст */
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Уменьшенная тень */
    }
`;

