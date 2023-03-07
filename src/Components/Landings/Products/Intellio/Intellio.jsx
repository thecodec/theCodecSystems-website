import React from "react";
import Nav from "../../../Nav/Nav";

import './Intellio.css'

import Arrow1 from '../../../../Assets/Icons/rightArrow.svg'
import IntellioLogo from '../../../../Assets/Logo/e-intellio-logo.png'
import MainImg from '../../../../Assets/Img/intelliokg.png'
import ProductNav from "../ProductNav/ProductNav";
import { Link } from "react-router-dom";
import StickySideIcons from "../../../Utilities/StickySideIcons";


const Intellio = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row pt-5 mt-2">
                    <div className="col-md-5">
                        <img loading='lazy'  width='50%' src={IntellioLogo} alt='destop imagery' className="intLogo" />
                        <div className="hdContents mt-5">
                            <h2 className="h1">Traffic &</h2>
                            <h2 className="h1">Security <small className="text-dark">&</small></h2>
                            <h2 className="h1">Intelligence App</h2>
                            <p className="text-muted mt-3">
                                An Intel Gathering platform with Traffic and Security Insights for Commuters World-wide’s Safety & Ease of travel.
                            </p>
                            <Link to='/contact'><button className="btn btn-dark text-white btnView-e mt-4">Contact Us Today
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

export default Intellio