import React, {Component} from 'react';
import "./Basket.css";
import BasketItemCase from "./BasketItemCase";
import EmptyBasket from "./EmptyBasket.svg"

class Basket extends Component {
    render() {
        return (
            <div className={this.props.active ? "Basket active" : "Basket"} onClick={() => this.props.changeActiveBasket()}>
                <div className="BasketContent" onClick={s => s.stopPropagation()}>
                    {this.props.basketProducts.length ?
                        this.props.basketProducts.map(element => {
                            return(
                                <div key={element.Details.Id} >
                                    <BasketItemCase product={element} deleteFromBasket={this.props.deleteFromBasket}/>
                                </div>
                            )
                        }) :
                        <div className="EmptyBasket">
                            <img src={EmptyBasket} alt="EmptyBasket"/>
                            <h1>У кошику нічного немає :(</h1>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Basket;