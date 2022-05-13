import React from "react";
import "./Best-sellers.css";
import AOS from "aos";
import ShopItemsList from "../../ShopItemCase/ShopItemList";
import ShopItemsData from "../../ShopItemCase/ShopItemData"
import "aos/dist/aos.css"

class Bestsellers extends React.Component {
    constructor() {
        super();
        AOS.init({ duration: 800, once: true});
    }

    ShopItemsData = ShopItemsData.slice().sort((a, b) => b.Details.Purchase-a.Details.Purchase).slice(0, 4);

    render() {
        return (
            <div className="Best-sellers">
                <div className="Sellers-Name anim " data-aos="fade-up">
                    <h1>ХОДОВИЙ ТОВАР</h1>
                </div>
                <div className="sellers-items anim " data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <ShopItemsList shopElements={this.ShopItemsData} addToBasket={this.props.addToBasket}/>
                </div>
            </div>
        )
    }
}

export default Bestsellers;