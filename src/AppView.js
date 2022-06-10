import React, {Component} from 'react';
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import Basket from "./pages/Header/Basket/Basket";
import Menu from "./pages/Header/Menu/Menu";
import './App.css';

class AppView extends Component {
    render() {
        return (
            <>
                <Header changeActiveMenu={this.props.changeActiveMenu}
                        changeActiveBasket={this.props.changeActiveBasket}
                        deleteFromBasket={this.props.deleteFromBasket}
                        basketLength={this.props.basketLength}
                        changeCurrentCurrency={this.props.changeCurrentCurrency}
                />
                <Main addToBasket={this.props.addToBasket}
                      currentCurrency={this.props.currentCurrency}
                      currentCurrencySign={this.props.currentCurrencySign}
                />
                <Footer />
                <Basket active={this.props.activeBasket}
                        changeActiveBasket={this.props.changeActiveBasket}
                        currentCurrency={this.props.currentCurrency}
                        basketProducts={this.props.basketProducts}
                        deleteFromBasket={this.props.deleteFromBasket}
                        dragStartHandler={this.props.dragStartHandler}
                        dragOverHandler={this.props.dragOverHandler}
                        dragDropHandler={this.props.dragDropHandler}
                        currentCurrencySign={this.props.currentCurrencySign}
                />
                <Menu active={this.props.activeMenu}
                      changeActiveMenu={this.props.changeActiveMenu}
                      headName={"Меню сайта"}
                      items={this.props.items}/>
            </>
        );
    }
}

export default AppView;