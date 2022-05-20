import React, {Component} from 'react';
import ShopFilterCase from "./ShopFilterCase";
import "./ShopFilterList.css";

class ShopFilterList extends Component {
    filterList = ["MONITOR","GPU","CPU","MOUSE","HEADPHONES","RAM"];
    render() {
        return (
            <>
                <div className="ShopFilterList">
                    <h2 className="FilterText">Фільтри:</h2>
                    <div className="FilterItems">
                        {this.filterList.map(item => {return(
                            <ShopFilterCase key={item} filter={item} addOrRemoveToFilter={this.props.addOrRemoveToFilter}/>
                        )})}
                    </div>
                </div>
            </>
        );
    }
}

export default ShopFilterList;