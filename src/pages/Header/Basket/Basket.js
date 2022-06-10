import React, {Component} from 'react';
import BasketView from "./BasketView";
import PropTypes from "prop-types";

class Basket extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    targetOnKeyDown = (e) => {
        if(this.props.active){
            if(e.key === "ArrowDown"){
                this.setState( (state) => {
                    if(state.number < this.props.basketProducts.length){
                        return({
                            number: state.number + 1
                        })
                    } else {
                        return({
                            number: 0
                        })
                    }
                })
            }
            if(e.key === "ArrowUp"){
                this.setState( (state) => {
                    if(state.number){
                        return({
                            number: state.number - 1
                        })
                    } else {
                        return({
                            number: this.props.basketProducts.length
                        })
                    }
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener("keydown",this.targetOnKeyDown, false)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown",this.targetOnKeyDown, false)
    }

    render() {
        return (
            <>
                <BasketView active={this.props.active}
                            changeActiveBasket={this.props.changeActiveBasket}
                            currentCurrency={this.props.currentCurrency}
                            basketProducts={this.props.basketProducts}
                            deleteFromBasket={this.props.deleteFromBasket}
                            dragStartHandler={this.props.dragStartHandler}
                            dragOverHandler={this.props.dragOverHandler}
                            dragDropHandler={this.props.dragDropHandler}
                            number={this.state.number}
                            currentCurrencySign={this.props.currentCurrencySign}
                />
            </>
        );
    }
}

Basket.propTypes = {
    active: PropTypes.bool,
    changeActiveBasket: PropTypes.func,
    basketProducts: PropTypes.array,
    deleteFromBasket: PropTypes.func,
    dragStartHandler: PropTypes.func,
    dragOverHandler: PropTypes.func,
    dragDropHandler: PropTypes.func,
    currentCurrency: PropTypes.number,
    currentCurrencySign: PropTypes.string
};

export default Basket;