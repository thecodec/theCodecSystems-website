import React from "react";
import Kayode from '../../Assets/Team/team1.png'
import Grace from '../../Assets/Team/team2.png'
import Tobi from '../../Assets/Team/team3.png'
import Yinka from '../../Assets/Team/team4.png'
import Ariyo from '../../Assets/Team/team5.png'
import Bismark from '../../Assets/Team/team6.png'
import Linkdln from '../../Assets/Logo/linkdln.png'
import './Teams.css'

const Teams = () => {

    return (

        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className=""><span className="teamss">One Codec</span>, One Team</h2>
                    </div>
                </div>
                <div className="row text-center pt-5 mt-4">
                    <div className="col-md-4 animated fadeInLeft">
                        <img loading='lazy'  width='70%' src={Kayode} alt='boss pictures' />
                        <div className="titles">
                            <span className="names">Kayode</span> &nbsp;&nbsp;
                            <span className="otherName">Akintunde</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/kayuze/"><img loading='lazy'  src={Linkdln} alt='lindln icon' /></a>
                            <p>CEO | Systems Architect</p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInLeft">
                        <img loading='lazy'  width='70%' src={Grace} alt='coo pictures' />
                        <div className="titles">
                            <span className="names">Grace </span> &nbsp;&nbsp;
                            <span className="otherName">Onuoha</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/graceokafor/"><img loading='lazy'  src={Linkdln} alt='lindln icon' /></a>
                            <p>COO  | Technical Team Head</p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInLeft">
                        <img loading='lazy'  width='70%' src={Tobi} alt='fintech consultant' />
                        <div className="titles">
                            <span className="names">Tobi </span> &nbsp;&nbsp;
                            <span className="otherName">Ololade</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/ololaday/"><img loading='lazy'  src={Linkdln} alt='lindln icon' /></a>
                            <p>Lead Fintech Consultant</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-4 text-center">
                    <div className="col-md-4 animated fadeInRight">
                        <img loading='lazy'  width='70%' src={Yinka} alt='Product designer/manager' />
                        <div className="titles">
                            <span className="names">Adeyinka</span> &nbsp;&nbsp;
                            <span className="otherName">Oduwole</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/oduwoleadeyinkamichael/" >
                                <img loading='lazy'  src={Linkdln} alt='lindln icon' />
                            </a>
                            <p>Lead Product Designer</p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInRight">
                        <img loading='lazy'  width='70%' src={Ariyo} alt='frontend engineer' />
                        <div className="titles">
                            <span className="names">Ariyo</span> &nbsp;&nbsp;
                            <span className="otherName">Idowu</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/tobi-bismark-b87779128/"><img loading='lazy'  src={Linkdln} alt='lindln icon' /> </a>
                            <p>Lead Front-End Engineer</p>
                        </div>
                    </div>
                    <div className="col-md-4 animated fadeInRight">
                        <img loading='lazy'  width='70%' src={Bismark} alt='product support engineer' />
                        <div className="titles">
                            <span className="names">Tobi</span> &nbsp;&nbsp;
                            <span className="otherName"> Bismark</span> &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/ariyo-idowu-5247a1238/"><img loading='lazy'  src={Linkdln} alt='lindln icon' /> </a>
                            <p>Lead Product Supports Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams