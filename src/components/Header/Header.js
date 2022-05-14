import React from "react";
import SiteLogo from "./Logo.svg";
import Basket from "./Basket.png";
import {ReactComponent as BurgerButton} from "./BurgerButton.svg";
import "./Header.css";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            basketLengthAnim: "basketLength"
        }
    }


    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.basketLength !== this.props.basketLength){
            this.setState((state) => {
                return {basketLengthAnim: "basketLength anim"}
            });
            setTimeout(()=> { return this.setState((state) => {
                return {basketLengthAnim: "basketLength"}
            })}, 100);
            return true;
        } if(nextState.basketLengthAnim !== this.state.basketLengthAnim){
            return true;
        } else {
            return false;
        }
    }

    componentWillUnmount() {
        clearTimeout(this.basketLengthAnim);
    }

    render() {
        return (
            <header>
                <div className="burger-btn" onClick={() => this.props.changeActiveMenu()}>
                    <BurgerButton alt="Burger_Button" className="BurgerImage"/>
                </div>
                <div className="LogoAndName">
                    <a className="logo" href="/">
                        <img src={SiteLogo} alt="Logo_W-Hole" />
                    </a>
                    <a className="SiteName" href="/">W-Hole</a>
                </div>
                <div className="BasketName">
                    <p className="MadeBy">MADE BY: KHOLODNIY YURI</p>
                    <div className="BasketButton"  onClick={() => this.props.changeActiveBasket()} >
                        <img src={Basket} alt="Basket_Icon" className="BasketIcon" />
                        <div className={this.state.basketLengthAnim}>
                            <h3>{this.props.basketLength}</h3>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;