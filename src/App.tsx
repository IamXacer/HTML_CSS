import React from 'react';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { Header } from './layout/header/Header';
import { Skills } from './layout/sections/skills/Skills';
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Container} from "./components/Contaner";

/*const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;*/
const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Ставим элементы в колонку */
    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;
const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fef8f5;
    box-sizing: border-box;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const App = () => {
    return (
        <AppWrapper>
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
        </AppWrapper>
    );
};


export default App;
