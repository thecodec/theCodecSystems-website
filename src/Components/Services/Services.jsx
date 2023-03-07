import React from "react";

import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="container" id="#service">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2 id="">Services</h2>
                    </div>
                </div>
                <div className="row pt-5 pt-5">
                    <div className="col-md-4 animated fadeInLeft" data-animation-start="onScroll">
                        <div className="up">
                            <span className="title">CodecPay</span>
                        </div>
                        <p className="mt-3">Get seasoned Engineers to build
                            <br /> your secure, fast & Accurate
                            <br /> payment gateway. The fastest of
                            <br /> its kind in Africa
                        </p>
                    </div>
                    <div className="col-md-4 animated fadeInLeft">
                        <div className="up">
                            <span className="title">Call Centre Build</span>
                            <p className="mt-3">A call centre with proper quality
                                <br /> assurance, call centre monitor,
                                <br /> silent listening, call barging,
                                <br /> wall board etc?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInLeft">
                        <div className="up">
                            <span className="title">IVR System</span>
                            <p className="mt-3">TheCodec Systems IVR Systems are
                                <br /> integrated hardware and software
                                <br /> package that are fully scalable and
                                <br /> backed by a responsive 24 hour engineering
                                <br /> support team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row pt-5 pt-5">
                    <div className="col-md-4 animated fadeInRight">
                        <div className="up">
                            <span className="title">Consultancy</span>
                        </div>
                        <p className="mt-3">Services ranging from voice solutions,
                            <br />customized database driven IVR solutions,
                            <br /> Asterisk IP PBX solutions, & General Consultancy
                        </p>
                    </div>
                    <div className="col-md-4 animated fadeInRight">
                        <div className="up">
                            <span className="title">VOIP</span>
                            <p className="mt-3">We provide VoIP, Fax, SMS, and
                                <br /> hosting services to hundreds of
                                <br /> customers nationwide.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInRight">
                        <div className="up">
                            <span className="title">IP-PBX Solutions</span>
                            <p className="mt-3">We provide concise connectivity
                                <br /> including faxes, instant messaging, hosting
                                <br /> services, audio and video calls to hundreds
                                <br />of customers nationwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Services