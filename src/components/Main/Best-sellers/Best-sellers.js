import React from "react";
import "./Best-sellers.css";
import IntelI7 from "./I7-9700k.svg";
import GTX1660 from "./GTX1660.svg";
import RazerMamba from "./Razer-Mamba.svg";
import HyperXCLoud from "./HyperX-Cloud.svg";
import AOS from "aos";
import "aos/dist/aos.css"

class Bestsellers extends React.Component {
    constructor() {
        super();
        AOS.init({ duration: 800, once: true});
    }
    render() {
        return (
            <div className="Best-sellers">
                <div className="Sellers-Name anim " data-aos="fade-up">
                    <h1>ХОДОВИЙ ТОВАР</h1>
                </div>
                <div className="sellers-items anim " data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <a href="/" className="items">
                        <div className="">
                            <img className="seller-images" src={IntelI7} alt="I7-9700k" />
                        </div>
                        <div className="sellers-text">
                            <h2>Intel I7-9700k</h2>
                            <h3>$359.99</h3>
                        </div>
                    </a>
                    <a href="/" className="items">
                        <div className="">
                            <img className="seller-images" src={GTX1660} alt="GTX1660" />
                        </div>
                        <div className="sellers-text">
                            <h2>MSI GTX 1660</h2>
                            <h3>$429.99</h3>
                        </div>
                    </a>
                    <a href="/" className="items">
                        <div className="">
                            <img className="seller-images" src={RazerMamba} alt="Razer-Mamba" />
                        </div>
                        <div className="sellers-text">
                            <h2>Razer Mamba</h2>
                            <h3>$135,99</h3>
                        </div>
                    </a>
                    <a href="/" className="items">
                        <div>
                            <img className="seller-images" src={HyperXCLoud} alt="HyperX-Cloud" />
                        </div>
                        <div className="sellers-text">
                            <h2>HyperX Cloud</h2>
                            <h3>$119,99</h3>
                        </div>
                    </a>
                    <a className="btn" href="/">
                        <h2>Придбати</h2>
                    </a>
                    <a className="btn" href="/">
                        <h2>Придбати</h2>
                    </a>
                    <a className="btn" href="/">
                        <h2>Придбати</h2>
                    </a>
                    <a className="btn" href="/">
                        <h2>Придбати</h2>
                    </a>
                </div>
            </div>
        )
    }
}

export default Bestsellers;