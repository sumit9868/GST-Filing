import React from 'react'
import '../CSS/Home.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import Info from './Info'
import Offers from './Offers';
AOS.init();


function Home() {

   

    

    AOS.init({
        duration: 1200,
    });



    return (
        <div className="home">
           <Offers/>
            <Info />
        </div>
    )
}

export default Home
