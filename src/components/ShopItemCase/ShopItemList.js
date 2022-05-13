import React, {Component} from 'react';
import ShopItemCase from "./ShopItemCase";

class ShopItemsList extends Component {
    render() {
        return (
            <>
                {this.props.shopElements.map(element => {
                    return(<div key={element.Details.Id}>
                        <ShopItemCase element={element} addToBasket={this.props.addToBasket} />
                    </div>)
                })}
            </>
        );
    }
}

export default ShopItemsList;