import React, {Component} from 'react';
import ShopItemsList from "../../ShopItemCase/ShopItemList";
import ShopItemsData from "../../ShopItemCase/ShopItemData";
import "./ShopContent.css"

class ShopContent extends Component {
    constructor() {
        super();
        this.state = {
            sortSelector : "byId"
        }
        this.changeSortSelector = this.changeSortSelector.bind(this);
    }
    ShopItemsData = ShopItemsData.slice();

    changeSortSelector(sort){
        this.setState(state =>({
            sortSelector: sort
        }));
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
                <div className="shopItems">
                    <ShopItemsList shopElements={this.ShopItemsData} addToBasket={this.props.addToBasket}/>
                </div>
            </div>
        );
    }
}

export default ShopContent;