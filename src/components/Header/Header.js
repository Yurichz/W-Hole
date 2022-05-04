import React from "react";
import SiteLogo from "./Logo.svg";
import GitLogo from "./github_icon.svg";
import {ReactComponent as BurgerButton} from "./BurgerButton.svg";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="head">
                <div className="burger-btn" onClick={() => this.props.changeActiveMenu()}>
                    <BurgerButton alt="Burger_Button" className="BurgerImage"/>
                </div>
                <div className="LogoAndName">
                    <a className="logo" href="/">
                        <img src={SiteLogo} alt="Logo_W-Hole" />
                    </a>
                    <a className="SiteName" href="/">W-Hole</a>
                </div>
                <div className="GitName">
                    <p className="MadeBy">MADE BY: KHOLODNIY YURI</p>
                    <a className="git_icon" href="https://github.com/Yurichz" target="_blank" rel="noreferrer">
                        <img src={GitLogo} alt="Github_Icon" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;