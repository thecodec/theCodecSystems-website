import React from "react";

import './CodecCulture.css'

import Image1 from '../../Assets/Culture/pics1.png'
import Image2 from '../../Assets/Culture/pics2.png'
import Image3 from '../../Assets/Culture/pics3.png'
import Image4 from '../../Assets/Culture/pics4.png'
import Image5 from '../../Assets/Culture/pics5.png'

const CodecCulture = () => {
    return (
        <div>
            <div className="bkgss pt-5 mt-5">
                <div className="container pt-5">
                    <div className="container">
                        <div className="row text-center text-white">
                            <div className="col-md-12 ">
                                <h2 className="text-white animated fadeInDown">The Codec Culture</h2>
                                <p className="txtculture animated fadeInLeft">Our Peoples Culture makes us tick. A reach ranging from Businesses <br /> to Customers, our influence stretches across all strata.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="container">
                            <div className="row pt-5 mt-5">
                                <div className="col-md-4">
                                    <img loading='lazy'  width='80%' src={Image1} alt='pictures here codec culture' />
                                    <img loading='lazy'  className="pt-3" width='80%' src={Image2} alt='pictures here codec culture' />
                                </div>
                                <div className="col-md-4">
                                    <img loading='lazy'  className="pt-2" width='80%' src={Image3} alt='pictures here codec culture' />
                                </div>
                                <div className="col-md-4">
                                    <img loading='lazy'  className="pt-2" width='80%' src={Image4} alt='pictures here codec culture' />
                                    <img loading='lazy'  className="pt-3" width='80%' src={Image5} alt='pictures here codec culture' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodecCulture