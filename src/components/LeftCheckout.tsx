import React, { useState } from "react";
import "../pages/leftcheckout.css"

const LeftCheckout : React.FC  = () : JSX.Element =>{


    const [emailId, setEmailId] = useState("")


    function onEmailSubmit() {

    }

    return(
        <div className="lc0">
        <div style={{display: "flex", flexDirection: "column"}}>  
        <p>Express Checkout</p>
        <div className="pgw-holder">
            <button className="paypalbtn"><strong>PayPal</strong> Checkout</button>
             <button className="gpaybtn"><strong>G</strong>Pay</button>
        </div>
        </div> 
        <div style={{display: "flex", flexDirection: "column"}}>  
        <div style={{ marginTop: "64px", textAlign: "left", padding: 0, marginLeft: 0 }}>
        <h2 style={{marginTop: "64px"}}>Contact</h2>
        <p><strong>Please enter your email address to continue to checkout.</strong></p>
        <p style={{marginTop: "8px"}}>Email Address</p>
        </div>
        <input type="text" className="inputbox-1" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}}/>
        <button onClick={onEmailSubmit} className="submit-1">Continue</button>
        </div>
        <div style={{marginTop: "32px"}}>
        <input type="checkbox" checked={true} onChange={()=>{}}/>
        <label>Receive email and SMS alerts about new AS Colour product releases, sales and more.</label>
        </div>
        </div>
    )

}

export default LeftCheckout;