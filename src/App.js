import React from "react";
import AppView from "./AppView";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMenu : false,
            activeBasket : false,
            basketProducts: [],
            currentProduct: null,
            exchangeRates: null,
            currentCurrency: {
                currency: "USD",
                sign: "$"
            }
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

    dragStartHandler = (e,product) => {
        this.setState({currentProduct: product})
    }

    dragOverHandler = (e) => {
        e.preventDefault();
    }

    dragDropHandler = (e,product) => {
        e.preventDefault();
        this.setState((state) => {
            return{
                basketProducts: state.basketProducts.map(s => {
                    if(s.Details.Id === product.Details.Id){
                        return state.currentProduct
                    }
                    if(s.Details.Id === state.currentProduct.Details.Id){
                        return product
                    }
                    return s
                })
            }
        })
    }

    changeCurrentCurrency = (e) =>{
        let temp;
        if(e.target.value === "USD"){
            temp = "$";
        }
        if(e.target.value === "UAH"){
            temp = "₴";
        }
        if(e.target.value === "EUR"){
            temp = "€";
        }
        this.setState({currentCurrency: {
                currency: e.target.value,
                sign: temp
            }})
    }

    getExchangeRates = async () => {
        const response = await fetch("https://v6.exchangerate-api.com/v6/0ff8a5b28577d242b72ae57d/latest/USD");
        const data = await response.json();
        if(data.result === "success") {
            this.setState({exchangeRates: data["conversion_rates"]});
        }
        else{
            console.log("Error load data!");
        }
    }

    componentDidMount() {
        this.getExchangeRates()
    }

    render() {
        return (
            <>
                <AppView
                    changeActiveMenu={this.changeActiveMenu}
                    changeActiveBasket={this.changeActiveBasket}
                    deleteFromBasket={this.deleteFromBasket}
                    basketLength={this.state.basketProducts.length}
                    changeCurrentCurrency={this.changeCurrentCurrency}

                    addToBasket={this.addToBasket}
                    currentCurrency={this.state.exchangeRates ? +this.state.exchangeRates[this.state.currentCurrency.currency].toFixed(2) : 1}
                    currentCurrencySign={this.state.currentCurrency.sign}

                    activeBasket={this.state.activeBasket}
                    basketProducts={this.state.basketProducts}
                    dragStartHandler={this.dragStartHandler}
                    dragOverHandler={this.dragOverHandler}
                    dragDropHandler={this.dragDropHandler}

                    activeMenu={this.state.activeMenu}
                    headName={"Меню сайта"}
                    items={this.items}/>
            </>
        );
    }
}

export default App;