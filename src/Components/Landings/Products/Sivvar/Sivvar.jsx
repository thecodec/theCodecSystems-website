import React from "react"
import Nav from "../../../Nav/Nav"
import './Sivvar.css'
import SivvarImage from '../../../../Assets/Logo/sivvar.png'
import MainImgg from '../../../../Assets/Img/fullMock.png'
import GoogleApp from '../../../../Assets/Icons/googleplay.png'
import AppStore from '../../../../Assets/Icons/appstore.png'

// icons
import Recallos from '../../../../Assets/Icons/recallo.png'
import RecalloLite from '../../../../Assets/Icons/recalloLite.png'
import Verivo from '../../../../Assets/Icons/Verivo.png'
import Sivar from '../../../../Assets/Icons/sivar.png'
import Intellio from '../../../../Assets/Icons/intellio.png'
import StickySideIcons from "../../../Utilities/StickySideIcons"

const Sivvar = () => {


    return (
        <div>
            <Nav />
            
            <div className="container">
                <div className="row pt-5 mt-2">
                    <div className="col-md-6">
                        <img loading='lazy' width='40%' src={SivvarImage} alt='destop imagery' className="recaLogo" />
                        <div className="hdContents mt-5">
                            <h2 className="text-company2">The</h2>
                            <h2 className="text-company">Data Telco <small className="text-dark">App.</small></h2>
                            <h2 className="text-company">Connect With</h2>
                            <h2 className="text-company2">+10k Businesses <br /> in Nigeria</h2>
                            <p className="text-muted mt-3">
                                Reach over 10, 000+ Businesses & Counting in <br />Nigeria with a via Data Call, Email, SMS, Social <br /> Media Channels and many more
                            </p>
                        </div>
                        <h3 className="downloadApps mt-5 pt-2">Download Sivvar App</h3>
                        <img loading='lazy' src={GoogleApp} alt="google play icon" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img loading='lazy' src={AppStore} alt="app store icon" />
                    </div>
                    <div className="col-md-6">
                        <div className="mainImg">
                            <img loading='lazy' width='70%' className="arrowss levitating" src={MainImgg} alt="deskto  pictures" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="container-fluid takeBkg2 pt-3 mt-5">
                <div className="takeBkg">
                    <div className="row text-center mt-5 mb-2">
                        <div className="col-md-1"></div>
                        <div className="col-md-2"><img loading='lazy' width='50%' src={Recallos} alt="product" /></div>
                        <div className="col-md-2"><img loading='lazy' width='40%' src={Sivar} alt="product" /></div>
                        <div className="col-md-2"><img loading='lazy' width='40%' src={Intellio} alt="product" /></div>
                        <div className="col-md-2"><img loading='lazy' width='40%' src={Verivo} alt="product" /></div>
                        <div className="col-md-2"><img loading='lazy' width='40%' src={RecalloLite} alt="product" /></div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <StickySideIcons />
        </div>
    )
}

export default Sivvar