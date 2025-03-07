import { useState } from "react"
import "./footer.css"

export default function Footer(){
  const [emailId, setEmailId] = useState("")

    return(
        <nav className="footer"> 
         <div>
         <h4>Company</h4>
         <p>About Us</p>
         <p>Careers</p>
         <p>Showroom Locations</p>
         </div>
         <div>
         <h4>Customer Service</h4>
         <p>FAQs</p>
         <p>Shipping</p>
         <p>Returns</p>
         <p>Gift Vouchers</p>
         </div>
         <div>
         <h4>Stay Connrected</h4>
         <p>Be one of the first to receive new product launches, sale offers, collabs and more.</p>
         <input type="text" onChange={(e)=>{setEmailId(e.target.value)}} placeholder="Your email" className="emailinput"/>
         </div>
        </nav>
    )
}