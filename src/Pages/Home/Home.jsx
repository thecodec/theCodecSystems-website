// this file keeps all components rendered to the default page of the application...
import React from "react";
import CodecCulture from "../../Components/CodecCulture/CodecCulture";
import CodecLocation from "../../Components/CodecLocation";
import Footer from "../../Components/Footer/Footer";
import HappyClients from "../../Components/HappyClients/HappyClients";
import Land1 from "../../Components/Landings/Landing1/Land1";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Nav from "../../Components/Nav/Nav";
import ScrollUp from "../../Components/ScrollUp";
// import Services from "../../Components/Services/Services";
import Servicess from "../../Components/Services/Servicess";
import Teams from "../../Components/Teams/Teams";


const Home = () => {
    return (
        <div>
           <Nav />
                <Land1 />
                    <Servicess />
                        <HappyClients />
                            <CodecCulture />
                                <Teams />
                                    <CodecLocation />
                                    <Newsletter />
                                            <Footer />
                                                <ScrollUp />
                                    
                            
        </div>
    )
}

export default Home