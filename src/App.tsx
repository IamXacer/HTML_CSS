    import React from 'react';
    import styled from 'styled-components';
    import {ContactIcon, SkillIconWrapper} from "./components/icon/Icon";
    import {Main} from "./layout/sections/main/Main";
    import {Header} from "./layout/header/Header";

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const IconContainer = styled.div`
    display: flex;
    flex-direction: row; /* Горизонтальное расположение */
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
    gap: 10px; /* Расстояние между иконками */
    margin-top: 20px;
`;

    const App = () => {
        return (
            <div>
                <Container>
                    <Header/>
                    <Main/>
                    <IconContainer>
                        <SkillIconWrapper Iconid={'HTML'}/>
                            <SkillIconWrapper Iconid={'bootstrap'}/>
                            <SkillIconWrapper Iconid={'CSS'}/>
                            <SkillIconWrapper Iconid={'JS'}/>
                            <SkillIconWrapper Iconid={'React'}/>
                            <SkillIconWrapper Iconid={'Redux'}/>
                    </IconContainer>
                    <ContactIcon Iconid={'What'}/>
                    <ContactIcon Iconid={'1'}/>
                    <ContactIcon Iconid={'Telegram'}/>
                    <ContactIcon Iconid={'MailG'}/>
                    <ContactIcon Iconid={'Git'}/>
                </Container>
            </div>
        );
    };

    export default App;
