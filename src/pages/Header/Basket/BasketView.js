import React, {Component} from 'react';
import "./Basket.css";
import BasketItemCase from "./BasketItemCase";
import EmptyBasket from "./EmptyBasket.svg"
import PropTypes from "prop-types";

class BasketView extends Component {
    render() {
        return (
                <div className={this.props.active ? "Basket active" : "Basket"} onClick={() => this.props.changeActiveBasket()}>
                    <div className="BasketContent" onClick={s => s.stopPropagation()}>
                        {this.props.basketProducts.length ?
                            this.props.basketProducts.map((element,i=-1) => {
                                i++;
                                return(
                                    <div key={element.Details.Id} >
                                        <BasketItemCase product={element}
                                                        deleteFromBasket={this.props.deleteFromBasket}
                                                        active={i === this.props.number}
                                                        dragStartHandler={this.props.dragStartHandler}
                                                        dragOverHandler={this.props.dragOverHandler}
                                                        dragDropHandler={this.props.dragDropHandler}
                                        />
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

BasketView.propTypes = {
    active: PropTypes.bool,
    changeActiveBasket: PropTypes.func,
    basketProducts: PropTypes.array,
    deleteFromBasket: PropTypes.func,
    dragStartHandler: PropTypes.func,
    dragOverHandler: PropTypes.func,
    dragDropHandler: PropTypes.func,
    number: PropTypes.number
};

export default BasketView;