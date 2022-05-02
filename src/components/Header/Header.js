import React from "react";
import SiteLogo from "./Logo.svg";
import GitLogo from "./github_icon.svg";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="menu">
                <a className="logo" href="/">
                    <img src={SiteLogo} alt="Logo_W-Hole" />
                </a>
                <a className="SiteName" href="/">W-Hole</a>
                <div className="GitName">
                    <p className="MadeBy">MADE BY: KHOLODNIY YURI</p>
                    <a className="git_icon" href="https://github.com/Yurichz" target="_blank" rel="noreferrer">
                        <img src={GitLogo} alt="Github_Icon" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;