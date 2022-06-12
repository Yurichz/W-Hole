import React from "react";
import HeaderView from "./HeaderView";
import PropTypes from "prop-types";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            basketLengthAnim: "basketLength",
            exchangeRates: []
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state || nextProps.basketLength !== this.props.basketLength){
            if(nextProps.basketLength !== this.props.basketLength){
                this.setState((state) => {
                    return {basketLengthAnim: "basketLength anim"}
                });
                setTimeout(()=> { return this.setState((state) => {
                    return {basketLengthAnim: "basketLength"}
                })}, 100);
            }
            return true;
        } else {
            return false;
        }
    }
    getExchangeRates = async () => {
        const response = await fetch("https://v6.exchangerate-api.com/v6/0ff8a5b28577d242b72ae57d/latest/USD");
        const data = await response.json();
        if(data.result === "success") {
            this.setState({exchangeRates: data["conversion_rates"]});
        }
        else{
            console.log("Error load data!");
        }
    }

    componentDidMount() {
        this.getExchangeRates();
    }

    render() {
        return (
            <>
                <HeaderView changeActiveMenu={this.props.changeActiveMenu}
                            changeActiveBasket={this.props.changeActiveBasket}
                            deleteFromBasket={this.props.deleteFromBasket}
                            basketLength={this.props.basketLength}
                            basketLengthAnim={this.state.basketLengthAnim}
                            changeCurrentCurrency={this.props.changeCurrentCurrency}
                            exchangeRates={this.state.exchangeRates}
                />
            </>
        )
    }
}

Header.propTypes = {
    changeActiveMenu: PropTypes.func,
    changeActiveBasket: PropTypes.func,
    deleteFromBasket: PropTypes.func,
    changeCurrentCurrency: PropTypes.func,
    basketLength: PropTypes.number
};

export default Header;