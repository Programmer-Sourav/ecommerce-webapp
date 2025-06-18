import React from "react";
import LeftCheckout from "../components/LeftCheckout";
import RightCheckout from "../components/RightCheckout";
import "../checkout.css"

const Checkout : React.FC = () : JSX.Element =>{


    return(
        <div className="checkout-0"> 
        <div className="div0">
           <LeftCheckout/>
           </div>
           <div className="div1">
            <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
              <h2>Your Order</h2>
              <p style={{fontSize: "12px", fontWeight: "500"}}>EDIT CART</p>
              </div>
           <RightCheckout/>
           </div>
        </div>
    )
}

export default Checkout;