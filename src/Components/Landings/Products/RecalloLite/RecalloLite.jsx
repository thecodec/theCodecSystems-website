import React from "react";
import Nav from "../../../Nav/Nav";
import './RecalloLite.css'
import DesktopImage from '../../../../Assets/Logo/RecalloLogo.png'

import MainImgs from '../../../../Assets/Img/rc-lite-image.PNG'
import Arrow1 from '../../../../Assets/Icons/rightArrow.svg'
import ProductNav from "../ProductNav/ProductNav";
import { Link } from "react-router-dom";
import StickySideIcons from "../../../Utilities/StickySideIcons";


const RecalloLite = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row pt-5 mt-2">
                    <div className="col-md-5">
                        <img loading='lazy'  width='70%' src={DesktopImage} alt='destop imagery' className="recaLogo" />
                        <div className="hdContents mt-5">
                            <h2 className="rlite">The</h2>
                            <h2 className="rlite">Contact Centre <small className="text-dark"></small></h2>
                            <h2 className="rlite">For <span className="rlite-color">MSMEs</span></h2>

                            <p className="text-muted mt-3">
                            Reach over 10, 000+ Businesses & Counting in Nigeria with a via Data Call, Email, SMS, Social Media Channels and many more
                            </p>
                         <Link to='/contact'><button className="btn btn-dark text-white btnView2 mt-4">Contact Us Today
                                &nbsp;<img loading='lazy'  className="arrowss" src={Arrow1} alt="arrow" />
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mainImg">
                            <img loading='lazy'  width='100%' className="arrowss levitating" src={MainImgs} alt="the desktop pics for recallo lite" />
                        </div>
                    </div>
                </div>
            </div>
            <ProductNav />
            <StickySideIcons />
            

        </div>
    )
}

export default RecalloLite