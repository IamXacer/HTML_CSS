import React from 'react';
import './Icon.css';
import iconJs from "../../icons/file-type-js-official.png";
import LogoGit from "../../icons/logos_git-icon.svg";
import GitHub from "../../icons/akar-icons_github-fill.svg";
import Booststrap from "../../icons/logos_bootstrap.svg";
import ReactIcon from "../../icons/logos_react.svg";
import HTML from "../../icons/vscode-icons_file-type-html.svg";
import CSS from "../../icons/vscode-icons_file-type-css.svg";
import WebStorm from "../../icons/icons8-веб-буря.svg";

export const Icon = () => {
    return (
        <div className="icon-grid">
            <img src={HTML} alt="HTML Icon" />
            <img src={CSS} alt="CSS Icon" />
            <img src={iconJs} alt="JavaScript Icon" />
            <img src={ReactIcon} alt="React Icon" />
            <img src={Booststrap} alt="Bootstrap Icon" />
            <img src={LogoGit} alt="Git Icon" />
            <img src={GitHub} alt="GitHub Icon" />
            <img src={WebStorm} alt="GitHub Icon" />
        </div>
    );
};
