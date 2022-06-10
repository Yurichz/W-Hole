import React from "react";
import FirstContainerContent from "./FirstContainerContent/FirstContainerContent.js";
import SecondContainerContent from "./SecondContainerContent/SecondContainerContent.js";
import BestSellers from "./Best-sellers/Best-sellers.js";
import ShopContent from "./ShopContent/ShopContent";
import "./Main.css";
import PropTypes from "prop-types";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <FirstContainerContent />
                <SecondContainerContent />
                <BestSellers  addToBasket={this.props.addToBasket}
                              currentCurrency={this.props.currentCurrency}
                              currentCurrencySign={this.props.currentCurrencySign}
                />
                <ShopContent addToBasket={this.props.addToBasket}
                             currentCurrency={this.props.currentCurrency}
                             currentCurrencySign={this.props.currentCurrencySign}
                />
            </div>
        )
    }
}

Main.propTypes = {
    addToBasket: PropTypes.func,
    currentCurrency: PropTypes.number,
    currentCurrencySign: PropTypes.string
}

export default Main;