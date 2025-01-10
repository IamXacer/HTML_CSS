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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
    gap: 75px; /* Расстояние между иконками */
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
                        <SkillIconWrapper Iconid={'Git'}/>
                        <SkillIconWrapper Iconid={'Storyyy'}/>
                        <SkillIconWrapper Iconid={'PosT'}/>
                        <SkillIconWrapper Iconid={'Formik'}/>
                        <SkillIconWrapper Iconid={'custom-sprite'}/>
                        <SkillIconWrapper Iconid={'material-ui-sprite'}/>
                        <SkillIconWrapper Iconid={'Styled Components'}/>
                        <SkillIconWrapper Iconid={'axios-sprite'}/>

                        <SkillIconWrapper Iconid={'CSS'}/>
                            <SkillIconWrapper Iconid={'JS'}/>
                            <SkillIconWrapper Iconid={'React'}/>
                            <SkillIconWrapper Iconid={'Redux'}/>
                            <SkillIconWrapper Iconid={'typescript'}/>



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
