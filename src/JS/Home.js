import React from 'react'
import '../CSS/Home.css'
import Offers from './Offers';

function Home() {
    return (
        <>
            <Offers />
            <div className="home">
                <span className="home__header">
                    <b>WHAT IS GST RETURN FILING</b>
                </span>
                <div className="home__para">
                    The basic meaning of “GST Return Filing” is “maintaining financial accounts” per year. Bookkeeping and GST Return Filing can be divided into several fields including financial GST Return Filing, managing general GST Return Filing,professional GST Return Filing, chartered accountant, auditing,
                tax GST Return Filing and cost GST Return Filing. <br />
                    <b>Step 1:</b>
                Connect with an expert at LegalDocs and provide the necessary information to prepare your gst filing statement. <br />
                    <b>Step 2:</b>
                Our expert will prepare a GST return statement based on the information provided and send it to you for your approval. <br />
                    <b>Step 3:</b>
                GST return will be filed with the tax authorities once it has been approved by you.
                </div>
            </div>
        </>
    )
}

export default Home
