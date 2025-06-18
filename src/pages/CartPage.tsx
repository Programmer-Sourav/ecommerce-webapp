import "../cartpage.css"

import React, {useState } from "react";
import CI1 from "../assets/ci1.jpg"
import { useDispatch, useSelector } from "react-redux";


const CartPage  : React.FC = () : JSX.Element =>{
    const [quantity, setQuantity] = useState<number>(0)
    const [giftValue, setGiftValue] = useState<number | string>(0)
    const [updatedPrice, setUpdatedPrice] = useState<number | string>(0)
    const [visibleInput, setVisibleInput] = useState(false)

    const dispatch = useDispatch();
    const data = useSelector((state)=>state)

    const onInputChange = (giftValue: string) =>{
         setGiftValue(parseInt(giftValue))
      
    }

    function onApply () {
     calculateCartPrice()
    }

    function onCheckOut(){

    }

    function incrementCount(){
       setQuantity(quantity+1)
    }

    function decrementCount(){
       if(quantity>0)
       setQuantity(quantity - 1)
       else
       setQuantity(0)
    }

    function calculateCartPrice(){
        checkIfCouponPriceValid();
    }

    function checkIfCouponPriceValid(){
        const response = fetch("", {method: "POST", body: JSON.stringify(giftValue)})
        const data = response.then(res=>res.json()).then(res=>console.log(res)).catch((error)=>console.error("Error ", error))
        //if valid, deduct, else show toast message
        
    }

    const changeVisiblityOfInput = () =>{
        setVisibleInput(visibleInput =>!visibleInput)
    }

    return(
        <div className="background-modal-0">
            <div className="modal0">
                <h2 className="header0">Your Cart (1)</h2>
                <p className="close0">x</p>
                <hr className="section0"/>
                <div style={{margin: "32px"}}>
                    <p><strong>5026 Classic Tee - </strong>black</p>
                    <div className="cart-item-0">
                    <img src={CI1} alt="cart-item-img" width="56px" height="66px" className="border-img"/>
                    <p><strong>SML</strong></p>
                    <p>$24.00</p>
                    <div className="cart-item-1">
                    <p style={{margin: "4px", fontSize: "12px"}}>Remove</p>
                    <div className="cart-item-count0" onClick={decrementCount}><strong>-</strong></div>
                     <div className="cart-item-count"><strong>{quantity}</strong></div>
                     <div className="cart-item-count1" onClick={incrementCount}><strong>+</strong></div>
                    </div>
                    </div>
                        <h1>You Might Like</h1>
                        <hr className="section0"/>
                    <div className="gift-0">    
                    <p>Gift Voucher</p>  
                    <p style={{color: "gray"}} onClick={()=>{changeVisiblityOfInput()}}>Show</p>  
                    </div>
                      { visibleInput ?  <div>
                       <input type="text" className="input0" onChange={(e)=>{onInputChange(!isNaN(parseInt(e.target.value)) ? e.target.value : "0")}} value={giftValue}/>
                       <button onClick={onApply} className="btn-sbm0">Apply</button>
                       </div> : ""}
                       <div className="gift-0">
                          <p><strong>Subtotal</strong></p>
                          <p><strong>$24.00</strong></p>
                       </div>
                       <div className="gift-0">
                          <p><strong>Shipping</strong></p>
                          <p><strong>Calculated at Checkout</strong></p>
                       </div>
                         <div className="gift-0">
                          <p><strong>Total</strong></p>
                          <p><strong>$24.00</strong></p>
                       </div>
                       <button onClick={onCheckOut} className="checkout0">Checkout</button>
                </div>

            </div>
            
        </div>
    )
}

export default CartPage

