import React from "react";
import "./SecondContainerContent.css";

class SecondContainerContent extends React.Component {
    render() {
        return (
            <div className="SecondContent">
                <div className="SiteInfo">
                    <div className="H1Info">
                        <h1>W-Hole</h1>
                    </div>
                    <div className="OtherInfo">
                        <h3>- це інтернет-магазин який шарить у техніці та хоче цим допомогти іншим!</h3>
                        <h3>- це магазин який 24/7 розвивается щоб надавати вам більше послуг!</h3>
                        <h3>- це магазин у якому так і хочется щось придбати!</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondContainerContent;