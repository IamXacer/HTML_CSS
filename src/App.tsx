import React from 'react';
import styled from 'styled-components';
import {Icon} from "./components/icon/Icon";
import {Main} from "./layout/sections/main/Main";
import {Header} from "./layout/header/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;


const App = () => {
    return (
        <div>
            <Container>
                <Header/>
                <Main/>
             <Icon/>
            </Container>
        </div>
    );
};

export default App;
