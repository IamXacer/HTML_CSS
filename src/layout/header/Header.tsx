import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";


export const Header = () => {
    return (
        <HeaderStyle>
        <Logo/>
         <Menu/>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
    background-color: #a9cc74;
    width: 100%;
`