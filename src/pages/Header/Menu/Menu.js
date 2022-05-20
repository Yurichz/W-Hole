import React from 'react';
import "./Menu.css"

class Menu extends React.Component {
    render() {
        return (
            <div className={this.props.active ? "menu active" : "menu"} onClick={() => this.props.changeActiveMenu()}>
                <div className="blur" />
                <div className="menuContent" onClick={s => s.stopPropagation()}>
                    <div className="menuHeadName">
                        <h1>
                            {this.props.headName}
                        </h1>
                    </div>
                    <div className="Items">
                        {this.props.items.map(item => {
                            return (<div key={item.value} className="Item">
                                        <h3>
                                            <a href={item.href}>{item.value}</a>
                                        </h3>
                                    </div>)})}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;