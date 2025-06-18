import AlreadyBoughtItem from "../components/AlreadyBoughtItem"
import LeftContainer from "../components/ProductDetailsPage/LeftContainer"
import MidInfoPanel from "../components/ProductDetailsPage/MidInfoPanel"
import RightContainer from "../components/ProductDetailsPage/RightContainer"
import "./productdetails.css"

export default function ProductDetails(){


    return(
        <div className="productcontainer">
        <div className="productdetails0"> 
         <LeftContainer/>
         <RightContainer/>
        </div>
        <div>
          <MidInfoPanel/>
        </div>
        <div>
          <h3> Customers Also Bought</h3>
          <div className="alreadybought">
            <AlreadyBoughtItem/>
          </div>
          </div>
          </div>
    )
}