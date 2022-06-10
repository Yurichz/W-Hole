import React, {Component} from 'react';
import "./BasketItemCase.css"
import PropTypes from "prop-types";

class BasketItemCase extends Component {
    render() {
        return (
            <div className={(this.props.active) ? "BasketProduct active" : "BasketProduct"}
                 onDragStart={(e) => this.props.dragStartHandler(e,this.props.product)}
                 onDragOver={(e) => this.props.dragOverHandler(e)}
                 onDrop={(e) => this.props.dragDropHandler(e,this.props.product)}
                 draggable={true}
            >
                <div className="BasketProductInfo">
                    <div className="BasketProductBoxInfo">
                        <img className="BasketProductImage" src={this.props.product.Image} alt={this.props.product.Details.Alt}/>
                        <h2>{this.props.product.Name}</h2>
                    </div>
                    <div className="BasketProductBoxInfo">
                        <h2>{`${(this.props.product.Price * this.props.currentCurrency).toFixed(2)} ${this.props.currentCurrencySign}`}</h2>
                        <div className="DeleteIconFromBasket" onClick={() => this.props.deleteFromBasket(this.props.product.Details.Id)}>
                            <h3>X</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BasketItemCase.propTypes = {
    product: PropTypes.object,
    deleteFromBasket: PropTypes.func,
    active: PropTypes.bool,
    dragStartHandler: PropTypes.func,
    dragOverHandler: PropTypes.func,
    dragDropHandler: PropTypes.func,
    currentCurrency: PropTypes.number,
    currentCurrencySign: PropTypes.string
}

export default BasketItemCase;