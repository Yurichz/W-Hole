import React from 'react';
import "./Menu.css"

class Menu extends React.Component {
    ItemsList = this.props.Items.map(item => {
        return (<li key={item.value}>
                    <h3>
                        <a href={item.href}>{item.value}</a>
                    </h3>
                </li>)
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
                    <ul>
                        {this.ItemsList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;