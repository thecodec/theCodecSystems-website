import React from "react";

import './ProductNav.css'

// all product logos down here
import Recallos from '../../../../Assets/Icons/recallo.png'
import RecalloLite from '../../../../Assets/Icons/recalloLite.png'
import Verivo from '../../../../Assets/Icons/Verivo.png'
import Sivar from '../../../../Assets/Icons/sivar.png'
import Intellio from '../../../../Assets/Icons/intellio.png'
import { Link } from "react-router-dom";

const ProductNav = () => {
    return (
        <div>
            <div className="container-fluid takeBkg2 pt-3 mt-5">
                <div className="takeBkg">
                    <div className="row text-center mt-5 mb-2">
                        <div className="col-md-1"></div>
                        <div className="col-md-2"><Link to='/recallo'><img loading='lazy' width='50%' src={Recallos} alt="product" /></Link></div>
                        <div className="col-md-2"><Link to='/sivvar'><img loading='lazy' width='40%' src={Sivar} alt="product" /></Link></div>
                        <div className="col-md-2"><Link to='/intellio'><img loading='lazy' width='40%' src={Intellio} alt="product" /></Link></div>
                        <div className="col-md-2"><Link to='/verivo'><img loading='lazy' width='40%' src={Verivo} alt="product" /></Link></div>
                        <div className="col-md-2"><Link to='/recallolite'><img loading='lazy' width='50%' src={RecalloLite} alt="product" /></Link></div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductNav