import React from "react";
import Nav from "../../../Nav/Nav";
import Arrow1 from '../../../../Assets/Icons/rightArrow.svg'
import DesktopImage from '../../../../Assets/Logo/RecalloLogo.png'
import MainImg from '../../../../Assets/Logo/desktopRecallo.png'
// import Nav from "../../../Nav/Nav";

import './Recallo.css'
import ProductNav from "../ProductNav/ProductNav";
import { Link } from "react-router-dom";
import StickySideIcons from "../../../Utilities/StickySideIcons";


const Recallo = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row pt-5 mt-2">
                    <div className="col-md-5">
                        <img loading='lazy'  width='70%' src={DesktopImage} alt='destop imagery' className="recaLogo" />
                        <div className="hdContents mt-5">
                            <h2 className="text-company2">API Driven</h2>
                            <h2 className="text-company">Multichannel <small className="text-dark">&</small></h2>
                            <h2 className="text-company">Multitenant</h2>
                            <h2 className="text-company2">Contact Centre <br /> Solution</h2>
                            <p className="text-muted mt-3">
                                An AI Trained Contact Centre for an <br /> wholesome Customer Experience & <br />Customer retention processes.
                            </p>
                            <Link to='/contact'><button className="btn btn-dark text-white btnView mt-4">Contact Us Today
                                &nbsp;<img loading='lazy'  className="arrowss" src={Arrow1} alt="arrow" />
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mainImg">
                            <img loading='lazy'  width='100%' className="arrowss levitating" src={MainImg} alt="deskto  pictures" />
                        </div>
                    </div>
                </div>
            </div>
            <ProductNav />
            <StickySideIcons />


        </div>
    )
}

export default Recallo