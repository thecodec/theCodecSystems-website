import React from "react";
import './Land1.css'
import LandImg from '../../../Assets/pics1.png'
import Arrow1 from '../../../Assets/Icons/rightArrow.svg'
import Codec from '../../../Assets/Icons/codec.png'
import Recallo from '../../../Assets/Icons/recallo.png'
import Sivar from '../../../Assets/Icons/sivar.png'
import Intellio from '../../../Assets/Icons/intellio.png'
import Verivo from '../../../Assets/Icons/Verivo.png'
import Doja from '../../../Assets/Icons/Dojah.png'
import RecalloLite from '../../../Assets/Icons/recalloLite.png'
import { Link } from "react-router-dom";
import StickySideIcons from "../../Utilities/StickySideIcons";



const Land1 = () => {
    const handleClick = () => {
        const section = document.querySelector('#section');
        section.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
           
            <div className="container">
                <div className="row pt-5 mt-5 gbk">
                    <div className="col-md-6">
                        <div className="landContents animated fadeInLeft">
                            <h1>Building</h1>
                            <h1>Posibilities via</h1>
                            <h1 className="lemon">Communication</h1>
                            <h1>Technology</h1>
                            <p className="text-muted wow">We are a technology outfit with over 2 decades of <br />
                                Excellence in building outstanding voice verification & <br />
                                payment solutions.</p>
                        </div>
                        <div className="wow">
                            <button onClick={handleClick} className="btn btn-dark text-white btnViews mt-4 animated fadeInRight">View All Services
                                &nbsp;<img loading='lazy' src={Arrow1} alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 animated zoomIn">
                        <img loading='lazy' className="levitating" width='80%' src={LandImg} alt="pic Landing Page" />
                    </div>
                </div>
            </div>

            <section className="sect2 mt-5">
                <div className="container-fluid">
                    <div className="row animated fadeIn" >
                        <div className="col-md-2 mb-4 text-center mt-5 fcolom">
                            <img loading="lazy" width='50%' src={Codec} alt="product" />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-2 mt-5 text-center">
                                    <Link to='/recallo'><img loading='lazy' width='50%' src={Recallo} alt="product" /></Link>
                                </div>
                                <div className="col-md-2 mt-5 text-center">
                                    <Link to='/sivvar'><img loading='lazy' width='40%' src={Sivar} alt="product" /></Link>
                                </div>
                                <div className="col-md-2 mt-5 text-center">
                                    <Link to='/intellio'><img loading='lazy' width='40%' src={Intellio} alt="product" /></Link>
                                </div>
                                <div className="col-md-2 mt-5 text-center">
                                    <Link to='/verivo'><img loading='lazy' width='40%' src={Verivo} alt="product" /></Link>
                                </div>
                                <div className="col-md-2 mt-5 text-center">
                                    <Link to='/recallolite'><img loading='lazy' width='50%' src={RecalloLite} alt="product" /></Link>
                                </div>
                                <div className="col-md-2 mt-5 text-center">
                                    <img loading='lazy' width='40%' src={Doja} alt="product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <StickySideIcons />
        </div>

    )
}

export default Land1