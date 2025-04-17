import { useState } from "react"
import "../regioncheck.css"

export default function RegionCheckModal(){

    const [regionInput, setRegionInput] = useState("")

    const checkRegion = () =>{
        
    }



    return(
        <div className="bodycontainer">
        <div className="modalbody"> 
        <h4 className="heading">CITY/LOCATION CHECK</h4>
        <p className="para1">Please confirm your city or location to ensure we're delivering your order.</p>
        <input type="text" className="regioninput" onChange={(e)=>{setRegionInput(e.target.value)}}/>
        <button onClick={()=>{checkRegion()}} className="mbutton"> CONTINUE </button>
        </div>
        </div>
    )
}