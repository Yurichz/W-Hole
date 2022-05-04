import React from 'react';
import "./Menu.css"

class Menu extends React.Component {
    ItemsList = this.props.Items.map(item => {
        return (<div key={item.value} className="Item">
                    <h3>
                        <a href={item.href}>{item.value}</a>
                    </h3>
                </div>)
    })
    render() {
        return (
            <div className={this.props.stat ? "menu active" : "menu"} onClick={() => this.props.changeActiveMenu()}>
                <div className="blur" />
                <div className="menuContent" onClick={s => s.stopPropagation()}>
                    <div className="menuHeadName">
                        <h1>
                            {this.props.HeadName}
                        </h1>
                    </div>
                    <div className="Items">
                        {this.ItemsList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;