import React, { } from "react";

import './Contact.css'
import HeadSet from '../../Assets/Img/headset.png'

import Phony from '../../Assets/Icons/phones.png'
import Maily from '../../Assets/Icons/mails.png'

import Arrows from '../../Assets/Icons/arrow-left-circle.png'
import { Link } from "react-router-dom";

// import Land1 from "../../Components/Landings/Landing1/Land1";

import { useForm, ValidationError } from '@formspree/react';
import Nav from "../../Components/Nav/Nav";
// import Services from "../../Components/Services/Services";
// import SuccessIcon from '../../Assets/1103-confetti.svg'




const Contact = () => {

    const [state, handleSubmit] = useForm("mjvdgqgd");
    if (state.succeeded) {
        return <div className="contactSuccessModal animated fadeInLeft" data-mdb-animation-start="onLoad">
            <div className="modalBody text-center mt-5 pt-5">
                <h5 className="text-white">Thanks for reaching out to us!</h5>
                <h5 className="text-white">Our Representatives will get in touch <br /> with you via email provideds!</h5>
                <Link className="text-white" to='/home'>Back</Link>
            </div>
        </div>;
    }


    return (
        <div>
        <Nav />
            <div className="container pt-2 mt-4 mb-5">
                <div className="row pt-4 mt-1">
                    <div className="col-md-12">
                        <span>
                            <Link to='/'>
                                <img loading='lazy' width='35px' src={Arrows} alt='arrow photss' />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-6">
                        <h1 className="display-5">Get In <span className="touch">Touch</span></h1>
                        <p className="txtextra">Contact Our Representative. Expect a timely response for your Support and Enquiry.</p>
                        <div className="form-area">
                            <form onSubmit={handleSubmit} method="POST">
                                <input id="name" required name="name" className="formss mt-5 mb-4" type="text" placeholder="name" /> <br />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                                <input id="email" required name="email" className="formss mb-4" type="text" placeholder="Email" /> <br />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <input id="phone" required name="phone" className="formss mb-4" type="text" placeholder="Phone Number" /> <br />
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                                <textarea id="message" required name="message" type="text" placeholder="Type your meesage here" className="textareas"></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} className="blockBtn btn">SEND</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img loading='lazy' className="ml-5 levitating" src={HeadSet} width="400" alt="headset" />
                    </div>
                </div>
                <div className="row mt-5 pt-3">
                    <div className="col-md-3">
                        <p><img loading='lazy' src={Phony} alt="conatct phont" /> &nbsp;&nbsp;&nbsp; +23412520786</p>
                    </div>
                    <div className="col-md-3">
                        <p><img loading='lazy' src={Maily} alt="conatct phont" /> &nbsp;&nbsp;&nbsp; Contactus@thecodecsystems.com</p>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">
                    </div>
                </div>

            </div>

        </div>
    )
};



export default Contact