import React, {Component} from 'react';
import "./ShopItemCase.css"
import PropTypes from "prop-types";

class ShopItemCase extends Component {
    render() {
        return (
            <>
                <div className="shopItemCase">
                    <div className="shopItemInfo">
                        <a href="/">
                            <div>
                                <img className="shopItem-images" src={this.props.element.Image} alt={this.props.element.Details.Alt} />
                            </div>
                            <div className="shopItem-text">
                                <h2>{this.props.element.Name}</h2>
                                <h3>${this.props.element.Price}</h3>
                            </div>
                        </a>
                    </div>
                    <div className="btn" onClick={() => this.props.addToBasket(this.props.element)}>
                        <h2>
                            Купити
                        </h2>
                    </div>
                </div>
            </>
        );
    }
}

ShopItemCase.propTypes = {
    addToBasket: PropTypes.func,
    element: PropTypes.object
}

export default ShopItemCase;