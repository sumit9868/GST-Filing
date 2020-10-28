import React from 'react'
import '../CSS/Home.css'
import Offers from './Offers';
import Info from './Info';

function Home() {
    return (
        <div className="home">
            <Offers />
            <Info />
        </div>
    )
}

export default Home
