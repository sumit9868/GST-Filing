import React from 'react'
import { scroller } from "react-scroll";
import '../CSS/Offers.css'
function Offers() {
<<<<<<< HEAD
    return (<div className="offers__box">
        <div className="offers">
            <div className="offers__tagline">
                <span> Todays Offers </span>
            </div>

            <div className="offerbox2">
                <div className="tagline2">
                    Online Gst Filing
                </div>
                <div>
                    <div className="tagline3">Get Filing Packedge</div>
                    <div className="tagline4">Recognised by Startup India Registration number:1234UCO3343</div>
                    <div>Free Accounting & Banking App</div>
                </div>
=======



    return (
        <div className="offers">

            <div className="offers__banner__left">
                <span className="offers__heading">GST Filing</span>
                <span className="offers__heading">GST Return Filing Online in 3 Simple Steps</span>
                <span className="offers__heading">File your GST Returns Now</span>
            </div>


            <div className="offers__banner__right">

                <div className="offers__tagline">
                    <span> Todays Offers </span>
                </div>

                <div className="offers__form">
                    <span>Best GST Registration Package</span>
                    {/* <br/> */}
                    <div className="price">
                        <span className="oldPrice">₹1500</span>
                        <span className="newPrice">₹499</span>
                    </div>
                </div>

>>>>>>> f54ab60582e3f76e8895447c48c5461109ac1a5d
            </div>

        </div>
    </div>
    )
}

export default Offers
