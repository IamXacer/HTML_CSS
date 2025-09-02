import React from 'react';
import styled from 'styled-components';
import ProgrammerLogo from '../../icons/ProgrammerLogo.png';

export const Logo = () => {
    return (
        <a>
            <LogoIcon>
                <img src={ProgrammerLogo} alt="Logo" />
            </LogoIcon>
        </a>
    );
};

const LogoIcon = styled.div`
    width: 50px;
    height: 50px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
