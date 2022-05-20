import React, {Component} from 'react';
import ShopItemsList from "../../../components/ShopItemCase/ShopItemList";
import ShopItemsData from "../../../components/ShopItemCase/ShopItemData";
import "./ShopContent.css"
import ShopFilterList from "./ShopFilterList";
import AOS from "aos";
import "aos/dist/aos.css"

class ShopContent extends Component {
    constructor() {
        super();
        this.state = {
            sortSelector : "byId",
            shopFilters : [],
            ShopItemsData : ShopItemsData.slice()
        }
    }

    componentDidMount() {
        AOS.init({ duration: 800, once: true});
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
            if(nextState.sortSelector !== this.state.sortSelector){
                this.sortBySelectedWithMethodSort();
            }
            return true;
        } else {
            return false;
        }
    }

    changeSortSelector = (sort) =>{
        this.setState(state =>({
            sortSelector: sort
        }));
    }

    addOrRemoveToFilter = (filter) =>{
        this.setState((state) =>{
            if(!this.state.shopFilters.includes(filter)){
                return ({
                    shopFilters: [...state.shopFilters, filter]
                })
            } else {
                return ({
                    shopFilters: state.shopFilters.filter((item) => {return item !== filter})
                })
            }
        })
    }

    checkInFilter = (item) => {
        for(let filter in this.state.shopFilters){
            if(item.Details.Tags.includes(this.state.shopFilters[filter])){
                return true;
            }
        }
        return false;
    }

    sortBySelectedWithMethodSort = () =>{
            this.setState((state)=>{
                if(state.sortSelector === "byId"){
                    return({
                        ShopItemsData: state.ShopItemsData.sort((a, b) => a.Details.Id - b.Details.Id)
                    })
                } else if (state.sortSelector === "byPrice"){
                    return ({
                        ShopItemsData: this.sortBySelectedMyMethod()
                    })
                } else {
                    return({
                        ShopItemsData: state.ShopItemsData.sort((a, b) => b.Details.Purchase - a.Details.Purchase)
                    })
                }
            })
    }

    sortBySelectedMyMethod= () =>{
        let tempArr = this.state.ShopItemsData.slice();
        for (let i = 0; i < tempArr.length - 1; i++) {
            for (let j = 0; j < tempArr.length - (i+1); j++) {
                if (tempArr[j]["Price"] > tempArr[j+1]["Price"]){
                    [tempArr[j], tempArr[j+1]] = [tempArr[j+1], tempArr[j]]
                }
            }
        }
        return tempArr
    }

    render() {
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
                            this.state.ShopItemsData.filter(item => this.checkInFilter(item)) :
                            this.state.ShopItemsData}
                                       addToBasket={this.props.addToBasket}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopContent;