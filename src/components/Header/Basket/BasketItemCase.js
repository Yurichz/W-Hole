import React, {Component} from 'react';
import "./BasketItemCase.css"

class BasketItemCase extends Component {
    render() {
        return (
            <div className="BasketProduct">
                <div className="BasketProductInfo">
                    <div className="BasketProductBoxInfo">
                        <img className="BasketProductImage" src={this.props.product.Image} alt={this.props.product.Details.Alt}/>
                        <h2>{this.props.product.Name}</h2>
                    </div>
                    <div className="BasketProductBoxInfo">
                        <h2>${this.props.product.Price}</h2>
                        <div className="DeleteIconFromBasket" onClick={() => this.props.deleteFromBasket(this.props.product.Details.Id)}>
                            <h3>X</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasketItemCase;