import React, {Component} from 'react';
import ShopFilterCase from "./ShopFilterCase";
import "./ShopFilterList.css";
import PropTypes from "prop-types";

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

ShopFilterList.propTypes = {
    addOrRemoveToFilter: PropTypes.func
}

export default ShopFilterList;