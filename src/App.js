import './App.css';
import React from "react";
import "aos/dist/aos.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu/Menu";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            active : false
        }
        this.changeActiveMenu = this.changeActiveMenu.bind(this);
    }
    items = [{value: "Главная", href: '/main'},{value: "Каталог", href: '/catalog'},{value: "О нас", href: '/aboutus'}];
    changeActiveMenu(){
        this.setState(state => ({
            active: !state.active
        }));
    }
    render() {
        return (
            <>
                <Header state={this.state.active} changeActiveMenu={this.changeActiveMenu} />
                <Main />
                <Footer />
                <Menu stat={this.state.active} changeActiveMenu={this.changeActiveMenu} HeadName={"Меню сайта"} Items={this.items}/>
            </>
        );
    }
}

export default App;