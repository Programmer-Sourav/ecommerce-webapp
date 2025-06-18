import React, { useState } from "react";
import "../rightco.css"
import CI1 from "../assets/ci1.jpg"


const RightCheckout : React.FC = () : JSX.Element =>{

const [couponValue, setCouponValue] = useState<number | undefined>(0)

  function onApply(){

  }
    return(
        <div className="cart-body">
            <p><strong>Classic Tee | 5026 -</strong> black</p> 
            <div className="cart-item-parent-0">
                <div className="cart-item-0">
                    <>
                    <img src={CI1} alt="Tee" width="52px" height="64px"/>
                    </>
                 
                    <p>SML</p>
                    <p>$24.00</p>
                   
                </div>
                <p>QTY: 1</p>
            </div>
            <hr/>
            <p>Promo Code/Gift Voucher</p>
            <div className="input-1">
            <input type="text" value={couponValue} onChange={(e)=>{!isNaN(parseInt(e.target.value)) ? setCouponValue(parseInt(e.target.value)) : setCouponValue(0)}} className="inputbox1"/>
            <button onClick={onApply} className="btn2">Apply</button>
            </div>
            <div className="bottompanel0">
            <div className="flex1">
                <span>Subtotal</span>
                <span>$24.00</span>
            </div>
            <div className="flex1">
                <span>SALES TAX</span>
                <span>$0.00</span>
            </div>
            <div className="flex1">
                <span>Shipping</span>
                <span>--</span>
            </div>
             <div className="flex1">
                <span><strong>Total</strong></span>
                <span><strong>$24.00</strong></span>
            </div>
            </div>
          
        </div>
    )
}

export default RightCheckout;