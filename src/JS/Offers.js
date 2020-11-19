import React from 'react';
import '../CSS/Offers.css';
import InputField from './InputField';
import Button from '@material-ui/core/Button';
function Offers() {
    
    const inputRefs = React.useRef([
        React.createRef(), React.createRef()
    ]);

    const [data, setData] = React.useState({});

    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }

    const submitForm = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            console.log(valid)
            if (!valid) {
                isValid = false
            }
        }

        if (!isValid) {
            return
        }

        console.log("Logged In");
        //Carry on as normal
    }

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn = () => {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span = ()  => {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    return (
        <div className="offers">


        <div className="offers__banner__left">
            <span className="offers__heading">GST filing</span>
            <span className="offers__heading">GST return filing online in 3 simple steps</span>
            <span className="offers__heading">File your GST returns now</span>
        </div>


        <div className="offers__banner__right">
            <div className="offers__tagline">
                <span> Today's Offers </span>
            </div>
             <br/>   
            <div className="offers__form">
                <span>Best GST filing Package</span>

                <div className="price">
                    <span className="oldPrice">₹1500</span>
                    <span className="newPrice">₹499</span>
                </div>

                <span>Offer valid for today only</span>
                <br/>
                <button className="offerButton" id="myBtn" onClick={btn}>Buy Now</button>
            </div>
        </div>
        <div id="myModal" className="modal">

            <div className="modal-content">
                <span onClick={span} className="close">&times;</span>
                <div className="popup">
                    <form onSubmit={submitForm} className="modalForm">
                        <h1>Hurry up!!! Register Now  </h1>
                        <InputField
                            ref={inputRefs.current[0]}
                            label="Name*:"
                            name="name"
                            onChange={handleChange}
                            validation={"required|min:6|max:12"}
                        />
                        <InputField
                            ref={inputRefs.current[1]}
                            name="email"
                            label="Email*:"
                            validation="required|min:6"
                            onChange={handleChange}
                        />
                        <Button type="submit" className="offerLogin">REGISTER </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Offers
