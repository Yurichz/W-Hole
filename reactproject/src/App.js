import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"



class App extends React.Component {
    images = process.env.PUBLIC_URL + "/image/";
    constructor() {
        super();
        AOS.init({ duration: 800, once: true});
    }
    render() {
        return (
            <>
                <header className="header">
                    <div className="container">
                        <div className="menu">
                            <a className="logo" href="#">
                                <img src={this.images + "logo.svg"} alt="Logo_W-Hole" />
                            </a>
                            <a className="SiteName" href="#">W-Hole</a>
                            <div className="GitName">
                                <p className="MadeBy">MADE BY: KHOLODNIY YURI</p>
                                <a className="git_icon" href="https://github.com/Yurichz" target="_blank">
                                    <img src={this.images + "github_icon.svg"} alt="Github_Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main">
                    <div className="ContainerContent">
                        <div className="MessageContent">
                            <div className="message">
                                <h1 id="i1">ІНТЕРНЕТ-МАГАЗИН</h1>
                                <h2>ЯКИЙ ДОПОМОЖЕ ТОБІ</h2>
                                <h2>ПІДІБРАТИ ПК</h2>
                                <h3>Каталог:</h3>
                                <div className="imgs">
                                    <ul>
                                        <li className="Li-Images">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "RTX.png"} alt="RTX" />
                                            </a>
                                        </li>
                                        <li className="Li-Images">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "intel.png"} alt="Intel" />
                                            </a>
                                        </li>
                                        <li className="Li-Images">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "RAM.png"} alt="RAM" />
                                            </a>
                                        </li>
                                        <li className="Li-Images2">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "m-board.png"} alt="Board" />
                                            </a>
                                        </li>
                                        <li className="Li-Images2">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "frame.png"} alt="frame" />
                                            </a>
                                        </li>
                                        <li className="Li-Images2">
                                            <a href="#">
                                                <img className="prev_image" src={this.images + "power-unit.png"} alt="power" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="PCImage">
                            <img className="PC" src={this.images + "computer.png"} alt="Gamer_PC" />
                        </div>
                    </div>
                    <div className="ContainerContent">
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
                    <div className="Content">
                        <div className="Best-sellers">
                            <div className="Sellers-Name anim " data-aos="fade-up">
                                <h1>ХОДОВИЙ ТОВАР</h1>
                            </div>
                            <div className="sellers-items anim " data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                                <a href="#" className="items">
                                    <div className="">
                                        <img className="seller-images" src={this.images + "I7-9700k.svg"} alt="I7-9700k" />
                                    </div>
                                    <div className="sellers-text">
                                        <h2>Intel I7-9700k</h2>
                                        <h3>$359.99</h3>
                                    </div>
                                </a>
                                <a href="#" className="items">
                                    <div className="">
                                        <img className="seller-images" src={this.images + "GTX1660.svg"} alt="GTX1660" />
                                    </div>
                                    <div className="sellers-text">
                                        <h2>MSI GTX 1660</h2>
                                        <h3>$429.99</h3>
                                    </div>
                                </a>
                                <a href="#" className="items">
                                    <div className="">
                                        <img className="seller-images" src={this.images + "Razer-Mamba.svg"} alt="Razer-Mamba" />
                                    </div>
                                    <div className="sellers-text">
                                        <h2>Razer Mamba</h2>
                                        <h3>$135,99</h3>
                                    </div>
                                </a>
                                <a href="#" className="items">
                                    <div>
                                        <img className="seller-images" src={this.images + "HyperX-Cloud.svg"} alt="HyperX-Cloud" />
                                    </div>
                                    <div className="sellers-text">
                                        <h2>HyperX Cloud</h2>
                                        <h3>$119,99</h3>
                                    </div>
                                </a>
                                <a className="btn" href="#">
                                    <h2>Придбати</h2>
                                </a>
                                <a className="btn" href="#">
                                    <h2>Придбати</h2>
                                </a>
                                <a className="btn" href="#">
                                    <h2>Придбати</h2>
                                </a>
                                <a className="btn" href="#">
                                    <h2>Придбати</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="InfoContainer">
                        <div className="Info">
                            <div className="Links">
                                <p className="f1">МОЇ ЛІНКИ</p>
                                <ul>
                                    <li>
                                        <a href="https://github.com/Yurichz" className="MyLinks" target="_blank">GITHUB</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/yurich_hz/" className="MyLinks"
                                           target="_blank">INST</a>
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
            </>
        );
    }
}

export default App;