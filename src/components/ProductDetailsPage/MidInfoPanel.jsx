import "../../pages/productdetails.css"
import MidLeftImage from "../../assets/MensClassicLeft.jpg"

export default function MidInfoPanel(){




    const viewRangeOfClothes = () =>{

    }


    return(
        <div className="mid-panel"> 
        <div className="mid-left-panel"><img src={MidLeftImage} alt="left-mid-image" loading="lazy" width="100%" height="100%" style={{objectFit:"conver"}}/></div>
        <div className="mid-right-panel">
        <p>Clean and timeless, our Classic range is crafted with heavy weight fabric. Boasting a refined silhouette and more formal drape, these styles are the epitome of go-anywhere shirts for all occasions.</p>  
        <div className="rbtn" onClick={viewRangeOfClothes}>View range </div>
        </div>
        </div>
    )
}