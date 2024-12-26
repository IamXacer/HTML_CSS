import React from 'react';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;
const PhoneIcon = styled.svg`
    width: 64px;
    height: 64px;
    fill: #20ed00; /* Встановлює колір іконки */
`;
const WhatsAppIcon = styled.svg`
    width: 64px;
    height: 64px;
    fill: #20ed00; /* Встановлює колір іконки */
`;

const App = () => {
    return (
        <div>
            <Container>
                <svg width="55" height="55">
                    <use xlinkHref="/images/sprite.svg#Phone"></use>
                </svg>
                <svg width="55" height="55">
                    <use xlinkHref="/images/sprite.svg#Git"></use>
                </svg>
                <svg width="55" height="55">
                    <use xlinkHref="/images/sprite.svg#MailG"></use>
                </svg>
                <svg width="55" height="55">
                    <use xlinkHref="/images/sprite.svg#Telegram"></use>
                </svg>
                <svg width="55" height="55">
                    <use xlinkHref="/images/sprite.svg#What"></use>
                </svg>
                <Header/>
            </Container>
        </div>
    );
};

export default App;
