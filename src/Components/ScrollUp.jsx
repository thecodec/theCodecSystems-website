import React from "react";
import './scrol.css'

const ScrollUp = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            <button className="scrol" id="scrolbtn" onClick={handleClick} style={{ position: 'fixed', bottom: 20, right: 20 }}>
                <i className="fa fa-up fa-angle-double-up"></i>
            </button>
        </div>
    )
}

export default ScrollUp