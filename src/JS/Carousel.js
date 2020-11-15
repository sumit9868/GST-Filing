import { Divider } from "@material-ui/core";
import React from "react";
import '../CSS/Carousel.css';
import banner1 from '../Media/banner1.jpg';

function Carousel(){

    return (
        <div class="marquee">
            <ul class="marquee-content">
                <li><img src={banner1} /></li>
                <li><img src='https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
                <li><img src='https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
                <li><img src='https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
                <li><img src='https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>

                <li><img src={banner1} /></li>
                <li><img src='https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
                <li><img src='https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
                <li><img src='https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></li>
            </ul>
        </div>
    )
}
export default Carousel;