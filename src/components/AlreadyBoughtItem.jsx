import { useState } from "react"
import "../already-bought.css"
import CI1 from "../assets/ci1.jpg"

export default function AlreadyBoughtItem(){
 //pass data as props

 const [sizeSelected, setSizeSelected] = useState("S")

 function onSizeSelected(sizeSelected){
   setSizeSelected(sizeSelected)
 }


    return(
        <div className="alreadyboughtcontainer"> 
        <img src={CI1} alt="downloading_image" width="auto" height="auto" className="abc_image"/>
        <h3 className="shrink-margin">Staple Tee | 5001</h3>
        <p className="shrink-margin">$20</p>
        <p className="shrink-margin">Regular Fit - 5.3 oz</p>
        <p className="shrink-margin">Regular</p>
        <p className="shrink-margin">76 colours</p>
        <p className="shrink-margin"><button onClick={()=>{onSizeSelected("XS")}}>XS</button>
        <button onClick={()=>{onSizeSelected("S")}}> S </button>
        <button onClick={()=>{onSizeSelected("M")}}> M </button>
        <button onClick={()=>{onSizeSelected("L")}}> L </button>
        <button onClick={()=>{onSizeSelected("XL")}}>XL </button>
        <button onClick={()=>{onSizeSelected("2XL")}}> 2XL </button>
        <button onClick={()=>{onSizeSelected("3XL")}}> 3XL </button> 
        <button onClick={()=>{onSizeSelected("4XL")}}>4XL </button>
        <button onClick={()=>{onSizeSelected("5XL")}}> 5XL</button></p>
        </div>
    )
}