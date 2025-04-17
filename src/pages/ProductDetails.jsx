import LeftContainer from "../components/ProductDetailsPage/LeftContainer"
import RightContainer from "../components/ProductDetailsPage/RightContainer"
import "./productdetails.css"

export default function ProductDetails(){


    return(
        <div className="productdetails"> 
         <LeftContainer/>
         <RightContainer/>
        </div>
    )
}