import { Divider } from "@material-ui/core";
import React from "react";
import '../CSS/Carousel.css';
import banner1 from '../Media/banner1.jpg';
import banner2 from '../Media/banner2.png';
import banner3 from '../Media/banner3.jpg';
import bannerE from '../Media/bannerE.jpg';
import bannerMSME from '../Media/bannerMSME.jpg';

function Carousel(){

    return (
        <div class="marquee">
            <ul class="marquee-content">
                <li><img src={banner1} /></li>
                <li><img src={banner2} /></li>
                <li><img src={banner3} /></li>
                <li><img src={bannerE} /></li>
                <li><img src={bannerMSME} /></li>

                <li><img src={banner1} /></li>
                <li><img src={banner2} /></li>
                <li><img src={banner3} /></li>
                <li><img src={bannerE} /></li>
            </ul>
        </div>
    )
}
export default Carousel;