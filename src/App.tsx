import React from 'react';
import styled from 'styled-components';
import {Icon} from "./components/icon/Icon";
import {Main} from "./layout/sections/main/Main";

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
                <Main/>
             <Icon/>


            </Container>
        </div>
    );
};

export default App;
