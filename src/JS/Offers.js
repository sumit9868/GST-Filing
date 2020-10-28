import React from 'react'
import { scroller } from "react-scroll";
import '../CSS/Offers.css'
function Offers() {



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

            </div>

        </div>
    )
}

export default Offers
