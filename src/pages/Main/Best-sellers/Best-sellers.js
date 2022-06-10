import React from "react";
import "./Best-sellers.css";
import AOS from "aos";
import ShopItemsList from "../../../components/ShopItemCase/ShopItemList";
import ShopItemsData from "../../../components/ShopItemCase/ShopItemData"
import "aos/dist/aos.css"
import PropTypes from "prop-types";

class Bestsellers extends React.Component {
    ShopItemsData = ShopItemsData.slice().sort((a, b) => b.Details.Purchase-a.Details.Purchase).slice(0, 4);
    componentDidMount() {
        AOS.init({ duration: 800, once: true});
    }

    render() {
        return (
            <div className="Best-sellers">
                <div className="Sellers-Name" data-aos="fade-up">
                    <h1>ХОДОВИЙ ТОВАР</h1>
                </div>
                <div className="sellers-items" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <ShopItemsList shopElements={this.ShopItemsData}
                                   addToBasket={this.props.addToBasket}
                                   currentCurrency={this.props.currentCurrency}
                                   currentCurrencySign={this.props.currentCurrencySign}
                    />
                </div>
            </div>
        )
    }
}

Bestsellers.propTypes = {
    addToBasket: PropTypes.func,
    currentCurrency: PropTypes.number,
    currentCurrencySign: PropTypes.string
}

export default Bestsellers;