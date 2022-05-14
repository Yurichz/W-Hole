import './App.css';
import React from "react";
import "aos/dist/aos.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu/Menu";
import Basket from "./components/Header/Basket/Basket";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMenu : false,
            activeBasket : false,
            basketProducts: []
        }
        this.changeActiveMenu = this.changeActiveMenu.bind(this);
        this.changeActiveBasket = this.changeActiveBasket.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.deleteFromBasket = this.deleteFromBasket.bind(this);
    }
    items = [{value: "Головна", href: '/main'},{value: "Каталог", href: '/catalog'},{value: "Про нас", href: '/aboutus'}];
    changeActiveMenu(){
        this.setState(state => ({
            activeMenu: !state.activeMenu
        }));
    }

    changeActiveBasket(){
        this.setState(state => ({
            activeBasket: !state.activeBasket
        }))
    }

    addToBasket(Product){
        const arrIds = this.state.basketProducts.map(elem => elem.Details.Id);
        if(!arrIds.includes(Product.Details.Id)){
            this.setState(state=> ({
                basketProducts: [...state.basketProducts, Product]
            }))
        }
    }

    deleteFromBasket(Id){
        this.setState(state=>({
            basketProducts: state.basketProducts.filter((item) => {return item.Details.Id !== Id})
        }))
    }

    render() {
        return (
            <>
                <Header changeActiveMenu={this.changeActiveMenu} changeActiveBasket={this.changeActiveBasket} deleteFromBasket={this.deleteFromBasket}/>
                <Main addToBasket={this.addToBasket} />
                <Footer />
                <Basket active={this.state.activeBasket} changeActiveBasket={this.changeActiveBasket} basketProducts={this.state.basketProducts} deleteFromBasket={this.deleteFromBasket}/>
                <Menu active={this.state.activeMenu} changeActiveMenu={this.changeActiveMenu} headName={"Меню сайта"} items={this.items}/>
            </>
        );
    }
}

export default App;