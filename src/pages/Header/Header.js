import React from "react";
import HeaderView from "./HeaderView";
import PropTypes from "prop-types";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            basketLengthAnim: "basketLength"
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.basketLengthAnim !== this.state.basketLengthAnim || nextProps.basketLength !== this.props.basketLength){
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

    render() {
        return (
            <>
                <HeaderView changeActiveMenu={this.props.changeActiveMenu}
                            changeActiveBasket={this.props.changeActiveBasket}
                            deleteFromBasket={this.props.deleteFromBasket}
                            basketLength={this.props.basketLength}
                            basketLengthAnim={this.state.basketLengthAnim}
                            changeCurrentCurrency={this.props.changeCurrentCurrency}
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