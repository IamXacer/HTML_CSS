import React from 'react';
import styled from "styled-components";
import {Title} from "../../../card/Card";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillIconWrapper} from "../../../components/icon/Icon";

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 колонок для больших экранов */
    justify-content: center;
    align-items: center;
    gap: 50px; /* Расстояние между иконками */
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr); /* 4 колонки для планшетов */
        gap: 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr); /* 3 колонки для небольших экранов */
        gap: 30px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* 2 колонки для мобильных устройств */
        gap: 20px;
    }
`;

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
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
const SectionTitle = styled.h3`
        font-size: 2.5rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
        position: relative;
        &:after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: #0073e6;
            margin: 10px auto 0;
        }
    `;

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