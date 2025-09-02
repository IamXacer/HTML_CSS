import { createGlobalStyle } from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5; /* Настройка межстрочного интервала */
        color: ${theme.colors.primary};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700; /* Жирный для заголовков */
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400; /* Обычный текст */
    }
    a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500; /* Полужирный для ссылок */
        text-decoration: none;
    }
    .contact-icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px; /* Укажите размер, соответствующий вашим иконкам */
        height: 55px;
        border: 3px solid ${theme.colors.primarySkills}; /* Светлый цвет обводки */
        border-radius: 50%; /* Круглая форма */
        background-color: rgba(0, 0, 285, 0.05); /* Легкий фон */
        transition: background 0.3s ease, transform 0.2s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
            background-color: rgba(0, 0, 255, 0.2); /* Темнее при наведении */
        }
    }
`;
