import React, { } from "react";
import './Nav.css'
import logo from '../../Assets/Logo/logo.svg'
import { Link } from "react-router-dom";


const Nav = () => {

    const handleClick = () => {
        const section = document.querySelector('#section'); // Replace with the ID of the section you want to scroll to
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <main>
            <nav className="navbar navbar-expand-sm navbar-dark navBgn navbar-fixed-top zindex-popover">
                <div className="container">
                    <Link to='/home'><img loading='lazy' src={logo} className="mx-3 mls pointer" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link navItems">Home</Link>
                            </li>
                            <li className="nav-item">
                                <p onClick={handleClick} className="nav-link navItems">Services</p>
                            </li>
                            <li className="nav-item">
                                <div className="drop-parent">
                                    <p className="nav-link navItems drp">Producs</p>
                                    <div className="dropDown">
                                        <Link to="/recallo" className="nav-link navItems2">Recallo</Link>
                                        <Link to="/sivvar" className="nav-link navItems2">Sivvar</Link>
                                        <Link to='/intellio' className="nav-link navItems2">e-Intellio</Link>
                                        <Link to="/recallolite" className="nav-link navItems2">Recallo Lite</Link>
                                        <Link to="/verivo" className="nav-link navItems2">Verivo</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link navItems">About Us</Link>
                            </li>

                            <div className="rightList d-flex">
                                <li className="nav-item ">

                                    <form>
                                        <select className="selectCountry">
                                            <option>NG</option>
                                            <option>UK </option>
                                            <option>USA</option>
                                        </select>
                                    </form>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="btn bg-dark text-white contact">Contact Us</Link>
                                </li>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Nav