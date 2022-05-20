import './App.css';
import React from "react";
import "aos/dist/aos.css"
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import Menu from "./pages/Header/Menu/Menu";
import Basket from "./pages/Header/Basket/Basket";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMenu : false,
            activeBasket : false,
            basketProducts: []
        }
    }
    items = [{value: "Головна", href: '/main'},{value: "Каталог", href: '/catalog'},{value: "Про нас", href: '/aboutus'}];
    changeActiveMenu= () =>{
        this.setState(state => ({
            activeMenu: !state.activeMenu
        }));
    }

    changeActiveBasket= () =>{
        this.setState(state => ({
            activeBasket: !state.activeBasket
        }))
    }

    addToBasket= (Product) =>{
        const arrIds = this.state.basketProducts.map(elem => elem.Details.Id);
        this.setState((state)=> {
            if(!arrIds.includes(Product.Details.Id)){
                return ({
                    basketProducts: [...state.basketProducts, Product]
                })
            }
        })
    }

    deleteFromBasket= (Id) =>{
        this.setState(state=>({
            basketProducts: state.basketProducts.filter((item) => {return item.Details.Id !== Id})
        }))
    }

    render() {
        return (
            <>
                <Header changeActiveMenu={this.changeActiveMenu}
                        changeActiveBasket={this.changeActiveBasket}
                        deleteFromBasket={this.deleteFromBasket}
                        basketLength={this.state.basketProducts.length}
                />
                <Main addToBasket={this.addToBasket}/>
                <Footer />
                <Basket active={this.state.activeBasket} changeActiveBasket={this.changeActiveBasket} basketProducts={this.state.basketProducts} deleteFromBasket={this.deleteFromBasket}/>
                <Menu active={this.state.activeMenu} changeActiveMenu={this.changeActiveMenu} headName={"Меню сайта"} items={this.items}/>
            </>
        );
    }
}

export default App;