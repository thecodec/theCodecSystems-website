import React from "react";
// import Star from '../../Assets/Icons/star.png'
import './HappyClients.css'
import Aero from '../../Assets/Clients/Aero_Contractors.png'
import DeloitteNigeria from '../../Assets/Clients/deloitteNigeria.png'
import Vgarden from '../../Assets/Clients/VGG.png'
import DeloitteGhana from '../../Assets/Clients/deloitteGhana.png'
import Alat from '../../Assets/Clients/Alat.png'
import Galaxy from '../../Assets/Clients/galaxy.png'
import Etranzact from '../../Assets/Clients/Etranzact_icon.png'
import Utomeedics from '../../Assets/Clients/utomeedics.png'


const HappyClients = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrap">
                            <div className="slide-container">
                                <div className="slides">
                                    <li><img loading='lazy'  width='50%' src={Aero} alt="aero logo" className="" />
                                    </li>
                                    <li><img loading='lazy'  width='50%' src={DeloitteNigeria} alt="deloitte logo" className="deloitte nigeria" /></li>
                                    <li><img loading='lazy'  width='50%' src={Vgarden} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={DeloitteGhana} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={Alat} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={Galaxy} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={Etranzact} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={Utomeedics} alt="aero logo" className="vgarden" /></li>
                                    <li><img loading='lazy'  width='50%' src={Aero} alt="aero logo" className="" /></li>
                                    <li><img loading='lazy'  width='50%' src={DeloitteNigeria} alt="deloitte logo" className="deloitte nigeria" /></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HappyClients