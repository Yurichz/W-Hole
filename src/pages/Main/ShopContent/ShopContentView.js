import React, {Component} from 'react';
import ShopItemsList from "../../../components/ShopItemCase/ShopItemList";
import "./ShopContent.css";
import ShopFilterList from "./ShopFilterList";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

class ShopContentView extends Component {
    render() {
        return (
            <div className="shopContent">
                <div className="shopContentInfo">
                    <h1>Магазин товарів</h1>
                    <select className="shopSortSelector" onChange={(e)=>{
                        this.props.changeSortSelector(e.target.value);
                    }
                    }>
                        <option value="byId">По ІD</option>
                        <option value="byPrice">По зростанню ціни</option>
                        <option value="byPopular">Ходові</option>
                    </select>
                </div>
                <div className="shopItemsAndFilters">
                    <ShopFilterList addOrRemoveToFilter={this.props.addOrRemoveToFilter} />
                    <div className="shopItems" data-aos="fade-left">
                        <ShopItemsList shopElements={ this.props.shopFiltersLength ?
                            this.props.ShopItemsData.filter(item => this.props.checkInFilter(item)) :
                            this.props.ShopItemsData}
                                       addToBasket={this.props.addToBasket}/>
                    </div>
                </div>
            </div>
        );
    }
}

ShopContentView.propTypes = {
    shopFiltersLength: PropTypes.number,
    ShopItemsData: PropTypes.array,
    changeSortSelector: PropTypes.func,
    addOrRemoveToFilter: PropTypes.func,
    checkInFilter: PropTypes.func,
    addToBasket: PropTypes.func
}

export default ShopContentView;