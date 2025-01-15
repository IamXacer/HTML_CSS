import React from 'react';
import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';

export const Menu = () => {
    return (
        <StyledMenu>
            <nav>
                <ul>
                    <li>
                        <ScrollLink to="main" smooth={true} duration={500}>
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={500}>
                            Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
    }
    li {
        padding-inline: 50px;
    }
`;
