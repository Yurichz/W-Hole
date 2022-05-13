import React from "react";
import FirstContainerContent from "./FirstContainerContent/FirstContainerContent.js";
import SecondContainerContent from "./SecondContainerContent/SecondContainerContent.js";
import BestSellers from "./Best-sellers/Best-sellers.js";
import ShopContent from "./ShopContent/ShopContent";
import "./Main.css";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <FirstContainerContent />
                <SecondContainerContent />
                <BestSellers  addToBasket={this.props.addToBasket}/>
                <ShopContent addToBasket={this.props.addToBasket}/>
            </div>
        )
    }
}

export default Main;