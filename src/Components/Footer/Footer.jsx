import React, { useState } from "react";
import CodecLogo from '../../Assets/Logo/Codec-white-Logo.png'
import Calls from '../../Assets/Icons/Vector.png'
import Contact from '../../Assets/Icons/Vector-2.png'
import Location from '../../Assets/Icons/Vector-1.png'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    const [date, setDate] = useState(new Date());

    const updateDate = () => {
        setDate(new Date());
    }

    return (
        <div>
            <footer className="container-fluid footerr pt-5 wow fadeInLeftBig animated">
                <div className="container ">
                    <div className="row py-5">
                        <div className="col-md-5">
                            <div className="footerHead">
                                <img loading='lazy'  src={CodecLogo} alt="logo" />
                            </div>
                            <div className="footBody">
                                <p className="ft1">TheCodec Systems Limited is an IT company
                                    <br /> with focus and developing sustainable
                                    <br /> technology projects that directly impacts on the
                                    <br />lives of the people.
                                </p>
                                <div className="socials botom mt-5">
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="pages text-white">
                                <h2 className="pagetxt">Pages</h2>
                                <div className="txts">
                                    <Link className="links text-white" to='/sivvar'>SIVVAR App</Link> <br />
                                    <Link className="links text-white" to='/recallo'>Recallo</Link><br />
                                    <Link className="links text-white" to='/verivo'>Verivo</Link>
                                    <p>Demo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="text-white">
                                <h2 className="servicetxt">Service</h2>
                                <div className="txts">
                                    <Link className="links text-white" to='/about'>CodecPay</Link> <br />
                                    <Link className="links text-white" to='/about'>Call Center build</Link><br />
                                    <Link className="links text-white" to='/about'>IVR Systems</Link><br />
                                    <Link className="links text-white" to='/about'>Consultancy</Link><br />
                                    <Link className="links text-white" to='/about'>VIOP</Link><br />
                                    <Link className="links text-white" to='/about'>IP-PBX Solution</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact text-white">
                                <h2 className="servicetxt">Contact</h2>
                                <div className="txts">
                                    <p><img loading='lazy'  src={Calls} alt="call icon" /> &nbsp; +23412520786</p>
                                    <p><img loading='lazy'  src={Contact} alt="contact icon" /> &nbsp; contactus@thecodecsystems.com</p>
                                    <p><img loading='lazy'  src={Location} alt="location icon" /> &nbsp; No 42B, Lanre Awolokun Road <br />
                                        Gbagada Phase 2, Lagos, <br /> Nigeria.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
            <div className="container-fluid footCredit py-4">
                <div className="row text-center text-white ">
                    <div onLoad={updateDate.Day} className="col-md-12">TheCodec Systems Limited {date.toString()}</div>
                </div>
            </div>
        </div>
    )
}

export default Footer