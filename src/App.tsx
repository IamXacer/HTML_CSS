import React from 'react';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { Header } from './layout/header/Header';
import { Skills } from './layout/sections/skills/Skills';
import {Contacts} from "./layout/sections/contacts/Contacts";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const SectionWrapper = styled.div`
    width: 100%; /* Растягиваем на всю ширину */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Высота на весь экран */
    box-sizing: border-box; /* Учитываем padding в ширине */
`;

const App = () => {
    return (
        <div>
            <Container>
                <Header />
                <SectionWrapper id="main">
                    <Main />
                </SectionWrapper>
                <SectionWrapper id="skills">
                    <Skills />
                </SectionWrapper>
                <SectionWrapper >
                    <Contacts/>
                </SectionWrapper>
            </Container>
        </div>
    );
};


export default App;
