import React, {Component} from 'react';
import SiteLogo from "./Logo.svg";
import Basket from "./Basket.png";
import {ReactComponent as BurgerButton} from "./BurgerButton.svg";
import "./Header.css";
import PropTypes from "prop-types";

class HeaderView extends Component {
    render() {
        return (
            <header>
                <div className="burger-btn" onClick={() => this.props.changeActiveMenu()}>
                    <BurgerButton alt="Burger_Button" className="BurgerImage"/>
                </div>
                <div className="LogoAndName">
                    <a className="logo" href="/src/pages">
                        <img src={SiteLogo} alt="Logo_W-Hole" />
                    </a>
                    <a className="SiteName" href="/src/pages">W-Hole</a>
                </div>
                <div className="BasketName">
                    <p className="MadeBy">MADE BY: KHOLODNIY YURI</p>
                    <div className="BasketButton"  onClick={() => this.props.changeActiveBasket()} >
                        <img src={Basket} alt="Basket_Icon" className="BasketIcon" />
                        <div className={this.props.basketLengthAnim}>
                            <h3>{this.props.basketLength}</h3>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

HeaderView.propTypes = {
    changeActiveMenu: PropTypes.func,
    changeActiveBasket: PropTypes.func,
    deleteFromBasket: PropTypes.func,
    basketLength: PropTypes.number,
    basketLengthAnim: PropTypes.string
};

export default HeaderView;