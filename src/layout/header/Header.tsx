import React, { useState, useEffect } from 'react';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";

// Типизация пропсов для HeaderStyle
interface HeaderStyleProps {
    isTransparent: boolean;
}

export const Header = () => {
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Проверяем, если страница прокручена вниз
            setIsTransparent(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HeaderStyle isTransparent={isTransparent}>
            <Logo />
            <Menu />
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header<HeaderStyleProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({ isTransparent }) => (isTransparent ? "rgba(169, 204, 116, 0.4)" : "#a9cc74")};
    box-shadow: ${({ isTransparent }) => (isTransparent ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};
    transition: background-color 0.9s ease, box-shadow 0.9s ease;
    width: 100%;
    padding-right: 320px;
    z-index: 1000;
    height: 70px;
`;
