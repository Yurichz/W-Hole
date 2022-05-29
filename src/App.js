import React from "react";
import AppView from "./AppView";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMenu : false,
            activeBasket : false,
            basketProducts: [],
            currentProduct: null
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

    render() {
        return (
            <>
                <AppView
                    changeActiveMenu={this.changeActiveMenu}
                    changeActiveBasket={this.changeActiveBasket}
                    deleteFromBasket={this.deleteFromBasket}
                    basketLength={this.state.basketProducts.length}

                    addToBasket={this.addToBasket}

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
