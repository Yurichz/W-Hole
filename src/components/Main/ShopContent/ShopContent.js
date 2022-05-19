import React, {Component} from 'react';
import ShopItemsList from "../../ShopItemCase/ShopItemList";
import ShopItemsData from "../../ShopItemCase/ShopItemData";
import "./ShopContent.css"
import ShopFilterList from "./ShopFilterList";
import AOS from "aos";
import "aos/dist/aos.css"

class ShopContent extends Component {
    constructor() {
        super();
        this.state = {
            sortSelector : "byId",
            shopFilters : []
        }
        this.changeSortSelector = this.changeSortSelector.bind(this);
        this.checkInFilter = this.checkInFilter.bind(this);
        this.addOrRemoveToFilter = this.addOrRemoveToFilter.bind(this);
    }
    ShopItemsData = ShopItemsData.slice();

    componentDidMount() {
        AOS.init({ duration: 800, once: true});
    }

    changeSortSelector(sort){
        this.setState(state =>({
            sortSelector: sort
        }));
    }

    addOrRemoveToFilter(filter){
        if(!this.state.shopFilters.includes(filter)){
            this.setState(state =>({
                shopFilters: [...state.shopFilters, filter]
            }))
        } else {
            this.setState(state=> ({
                shopFilters: state.shopFilters.filter((item) => {return item !== filter})
            }))
        }
    }

    checkInFilter(item){
        for(let filter in this.state.shopFilters){
            if(item.Details.Tags.includes(this.state.shopFilters[filter])){
                return true;
            }
        }
        return false;
    }

    sortBySelectedWithMethodSort(){
        if(this.state.sortSelector === "byId"){
            this.ShopItemsData.sort((a, b) => a.Details.Id - b.Details.Id)
        } else if (this.state.sortSelector === "byPrice"){
            this.sortBySelectedMyMethod();
        } else {
            this.ShopItemsData.sort((a, b) => b.Details.Purchase - a.Details.Purchase)
        }
    }

    sortBySelectedMyMethod(){
        let length = this.ShopItemsData.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - (i+1); j++) {
                if (this.ShopItemsData[j]["Price"] > this.ShopItemsData[j+1]["Price"]) {
                    [this.ShopItemsData[j], this.ShopItemsData[j+1]] = [this.ShopItemsData[j+1], this.ShopItemsData[j]];
                }
            }
        }
    }

    render() {
        this.sortBySelectedWithMethodSort();
        return (
            <div className="shopContent">
                <div className="shopContentInfo">
                    <h1>Магазин товарів</h1>
                    <select className="shopSortSelector" onChange={(e)=>{
                        this.changeSortSelector(e.target.value);
                    }
                    }>
                        <option value="byId">По ІD</option>
                        <option value="byPrice">По зростанню ціни</option>
                        <option value="byPopular">Ходові</option>
                    </select>
                </div>
                <div className="shopItemsAndFilters">
                    <ShopFilterList addOrRemoveToFilter={this.addOrRemoveToFilter} />
                    <div className="shopItems" data-aos="fade-left">
                        <ShopItemsList shopElements={ this.state.shopFilters.length ?
                            this.ShopItemsData.filter(item => this.checkInFilter(item)) :
                            this.ShopItemsData}
                                       addToBasket={this.props.addToBasket}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopContent;