import React, {Component} from 'react';
import "./ShopFilterCase.css"
import PropTypes from "prop-types";

class ShopFilterCase extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }

    }

    changeActive = () => {
        this.setState(state => ({
            active: !state.active
        }))
    }

    render() {
        return (
            <div className={ this.state.active ? "FilterCase active" : "FilterCase"} onClick={()=> {
                this.props.addOrRemoveToFilter(this.props.filter);
                this.changeActive()
            }}>
                <h3>{this.props.filter}</h3>
            </div>
        );
    }
}

ShopFilterCase.propTypes = {
    filter: PropTypes.string,
    addOrRemoveToFilter: PropTypes.func
}

export default ShopFilterCase;