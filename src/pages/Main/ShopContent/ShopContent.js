import React, {Component} from 'react';
import ShopItemsData from "../../../components/ShopItemCase/ShopItemData";
import "./ShopContent.css"
import AOS from "aos";
import "aos/dist/aos.css"
import PropTypes from "prop-types";
import ShopContentView from "./ShopContentView";

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

    componentDidUpdate(prevProps, prevState,){
        if(prevState.sortSelector !== this.state.sortSelector){
            this.sortBySelectedWithMethodSort();
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
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
            <>
                <ShopContentView
                    changeSortSelector={this.changeSortSelector}
                    addOrRemoveToFilter={this.addOrRemoveToFilter}
                    shopFiltersLength={this.state.shopFilters.length}
                    ShopItemsData={this.state.ShopItemsData}
                    checkInFilter={this.checkInFilter}
                    addToBasket={this.props.addToBasket}
                />
            </>
        );
    }
}

ShopContent.propTypes = {
    addToBasket: PropTypes.func
}

export default ShopContent;