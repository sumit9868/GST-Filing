import React from 'react'
import '../CSS/Offers.css'
function Offers() {



    return (
        <div className="offers">

            <div className="offers__banner__left">
                <span className="offers__heading">GST filing</span>
                <span className="offers__heading">GST return filing online in 3 simple steps</span>
                <span className="offers__heading">File your GST returns now</span>
            </div>


            <div className="offers__banner__right">

                <div className="offers__tagline">
                    <span> Todays Offers </span>
                </div>

                <div className="offers__form">
                    <span>Best GST filing Package</span>
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
