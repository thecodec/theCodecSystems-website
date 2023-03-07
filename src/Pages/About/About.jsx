import React from "react";
import Nav from "../../Components/Nav/Nav"
import MapIllustration from '../../Assets/Img/office-illustration-map.png'

// <img loading='lazy'  src="https://www.countryflagicons.com/FLAT/64/DE.png" />

import './About.css'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const handleNavigateToLogin = () =>{
        navigate('/')
    }
    return (
        <div>
            <Nav />
            <main className="wrapper">
                <div className="container wrapper">
                    <div className="row pt-4 mt-4"></div>
                    <div className="row wrapper">
                        <div className="col-md-7 my-5">
                            <img loading='lazy'  width='100%' src={MapIllustration} alt='map illustration for the aBOUT US PAGE' />
                        </div>
                        <div className="col-md-5 my-5">
                            <div className="contents">
                                <h2 className="text-company2">We are a</h2>
                                <h2 className="text-company">Fintech <small className="text-dark">&</small></h2>
                                <h2 className="text-company">Consultancy</h2>
                                <h2 className="text-company2">Company</h2>
                                <p className="text-muted mt-3 smallTxt">
                                    We are an tech outfit with over 2 decades  of presence, serving products and services to Customers and Businesses in the areas of Telephony, Fintech services, communication technology facilitation, and all-round technology consultancy.
                                </p>
                                <button onClick={handleNavigateToLogin} className="btn btn-dark text-white btnView2 mt-4">View All Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default About