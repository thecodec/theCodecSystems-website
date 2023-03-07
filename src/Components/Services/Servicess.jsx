import React from 'react';
import './Services.css'; // Import the CSS file for this component
import CallCenter from '../../Assets/Call_Centre_Build_icon.png'
import Ivr from '../../Assets/IVR_Systems_icon.png'
import CodecPay from '../../Assets/CodecPay_icon.png'
import IpPbx from '../../Assets/IP_PBX_Solutions_icon.png'
import Consultancy from '../../Assets/Consultancy_icon.png'
import Viop from '../../Assets/voip.png'

const Servicess = () => {

    return (
        <div id='section' className="services-container">
            <h2>Our Services</h2>
            <div className="services">

                <div className="service">
                    <img width='35' src={CallCenter} alt='call center build' />
                    <h3>Call/Contact Centre</h3>
                    <p>Fully featured call and contact centre
                        systems for SMES and multinationals
                        with blended call functionalities,
                        call monitoring, call recordings,
                        realtime call dashboard, agents screen,
                        quality assurance etc.</p>
                </div>
                <div className="service">
                    <img width='35' src={CodecPay} alt='codec pay' />
                    <h3>CodecPay</h3>
                    <p className="mt-3">Get seasoned Engineers to build
                        your secure, fast & Accurate
                        payment gateway. The fastest of
                        its kind in Africa
                    </p>
                </div>
                <div className="service">
                    <img width='35' src={Ivr} alt='ivr systems' />
                    <h3>IVR Systems</h3>
                    <p>TheCodec Systems' IVR ( interactive Voice Response) systems are build
                        and recorded by seasonsed multilingual voice artists to suit each client's
                        request and audience. They are multi-level and database/ api driven IVR system,
                        IVR payments,  IVR banking etc. backed by our responsive 24hour support team.</p>
                </div>
            </div>

            <div className="services">
                <div className="service">
                    <img width='35' src={Consultancy} alt='consultancy' />
                    <h3>Consultancy</h3>
                    <p>Services ranging from voice solutions,
                        customized database driven IVR solutions,
                        Asterisk IP PBX solutions, & General Consultancy</p>
                </div>

                <div className="service">
                    <img width='35' src={IpPbx} alt='IP_PBX_Solutions_icon' />
                    <h3>IP-PBX Solutions</h3>
                    <p>
                        We provide intra and intercompany unified communications
                        systems with voicemail to email, followme, CDRs, audio
                        and video calls capability, scalability, pstn, SIP,
                        PRI, SSL compatibility.</p>
                </div>
                <div className="service">
                    <img width='35' src={Viop} alt='viop' />
                    <h3>VOIP</h3>
                    <p className="mt-3">We provide VoIP,SIP trunking service and integration and
                        hosting services to hundreds of customers nationwide.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Servicess;
