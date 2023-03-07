import React from "react";
import Nav from "../../../../Components/Nav/Nav.jsx"
import Arrow1 from '../../../../Assets/Icons/rightArrow.svg'
import DesktopImage from '../../../../Assets/Logo/VerivoLogo.png'
import MainImg from '../../../../Assets/Img/verivoImg.png'

import './Verivo.css'
import ProductNav from "../ProductNav/ProductNav"
import { Link } from "react-router-dom";
import StickySideIcons from "../../../Utilities/StickySideIcons.jsx";



const Verivo = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row pt-5 mt-2">
                    <div className="col-md-5">
                        <img loading='lazy'  width='60%' src={DesktopImage} alt='destop imagery' className="verivi logo here" />
                        <div className="hdContents mt-5">
                            <h2 className="text-companys">Deliver <span className="otp">OTP</span></h2>
                            <h2 className="text-companys">Swiftly via a</h2>
                            <h2 className="text-companys">Multichannel</h2>
                            <h2 className="text-companys">Access.</h2>
                            <p className="text-muted mt-3">
                                An AI Trained Contact Centre for a <br /> wholesome Customer Experience & <br />Customer retention processes.
                            </p>
                            <Link to='/contact'>
                                <button className="btn btn-dark text-white btnView mt-4">Contact Us Today
                                    &nbsp;<img loading='lazy'  className="arrowss" src={Arrow1} alt="arrow" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mainImg">
                            <img loading='lazy'  width='100%' className="arrowss levitating verivoLanding" src={MainImg} alt="verivo landing-photos" />
                        </div>
                    </div>
                </div>
            </div>
            <ProductNav />
            <StickySideIcons />

        </div>
    )
}

export default Verivo;