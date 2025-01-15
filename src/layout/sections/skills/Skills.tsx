import React from 'react';
import styled from "styled-components";
import {Title} from "../../../card/Card";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillIconWrapper} from "../../../components/icon/Icon";

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
    gap: 75px; /* Расстояние между иконками */
    margin-top: 20px;
`;

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper></FlexWrapper>
            <IconContainer>
                <SkillIconWrapper Iconid={'HTML'} />
                <SkillIconWrapper Iconid={'Bootstrap'}/>
                <SkillIconWrapper Iconid={'Git'}/>
                <SkillIconWrapper Iconid={'StoryBook'}/>
                <SkillIconWrapper Iconid={'PostMan'}/>
                <SkillIconWrapper Iconid={'Formik'}/>
                <SkillIconWrapper Iconid={'RestApI'}/>
                <SkillIconWrapper Iconid={'Material Ui'}/>
                <SkillIconWrapper Iconid={'Styled Components'}/>
                <SkillIconWrapper Iconid={'Axios'}/>
                <SkillIconWrapper Iconid={'CSS'}/>
                <SkillIconWrapper Iconid={'JS'}/>
                <SkillIconWrapper Iconid={'React'}/>
                <SkillIconWrapper Iconid={'Redux'}/>
                <SkillIconWrapper Iconid={'Typescript'}/>
            </IconContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-color: #f9f9f9; /* Добавьте, если нужен фон */
`