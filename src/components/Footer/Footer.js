import React from "react";
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="InfoContainer">
                    <div className="Info">
                        <div className="Links">
                            <p className="f1">МОЇ ЛІНКИ</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/Yurichz" className="MyLinks" target="_blank" rel="noreferrer">GITHUB</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/yurich_hz/" className="MyLinks"
                                       target="_blank" rel="noreferrer">INST</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Time">
                            <p className="f1">ПРАЦЮЄМО</p>
                            <ul>
                                <li>
                                    <p className="f2">Пн-Пт: 08:00-20:00</p>
                                </li>
                                <li>
                                    <p className="f2">Сб-Вс: 9:00-18:00</p>
                                </li>
                            </ul>
                        </div>
                        <div className="TelNumber">
                            <p className="f1">НОМЕР ТЕЛЕФОНУ</p>
                            <p className="f2" id="number">0 800 000-000</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;