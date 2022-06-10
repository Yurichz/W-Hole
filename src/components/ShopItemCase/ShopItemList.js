import React, {Component} from 'react';
import ShopItemCase from "./ShopItemCase";
import PropTypes from "prop-types";

class ShopItemsList extends Component {
    render() {
        return (
            <>
                {this.props.shopElements.map(element => {
                    return(<div key={element.Details.Id}>
                        <ShopItemCase element={element} addToBasket={this.props.addToBasket}
                                      currentCurrency={this.props.currentCurrency}
                                      currentCurrencySign={this.props.currentCurrencySign}
                        />
                    </div>)
                })}
            </>
        );
    }
}

ShopItemsList.propTypes = {
    addToBasket: PropTypes.func,
    shopElements: PropTypes.array,
    currentCurrency: PropTypes.number,
    currentCurrencySign: PropTypes.string
}

export default ShopItemsList;