import PopupMenu from "./PopupMenu"
import "./popup.css"

export default function UsePopup(){

    const { openPopup, closePopup, buttonRef, isOpen, position } = PopupMenu();


    return(
        <div> 
        <button ref = {buttonRef} onClick={()=>{openPopup()}} className="btn-open">Open Popup</button>

        {isOpen && (
        <div className="parent">
        <div className="popup" style={{position: "absolute", top: position.top, left: position.left}}> 
        {isOpen && <div className="popup-content"> 
                <p className="close" onClick={closePopup}>&times;</p>
                <p>Popup content here!</p>
            </div>}
        </div>
        </div>
        )}

        </div>
    )
}