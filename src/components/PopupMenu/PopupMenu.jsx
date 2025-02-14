import { useEffect, useRef, useState } from "react"

export default function PopupMenu(){

 const [isOpen, setIsOpen] = useState(false)
 const [position, setPosition] = useState({top: 0, left: 0})

 const buttonRef = useRef(null)
 const popupRef = useRef(null)

    const openPopup = () =>{
        if(buttonRef.current){
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({top: rect.bottom + window.scrollY, left: rect.left + window.scrollX})
        }
       setIsOpen(true)
    }

    const closePopup = () =>{
        setIsOpen(false)
    }


    useEffect(()=>{
  
        const handleClickOutside = (event) =>{
          if(popupRef.current && !popupRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target))
            {
                closePopup();
            }
        }


   
     
    if(isOpen){
        document.addEventListener("mousedown", handleClickOutside);
    }    

    return () =>{
        document.removeEventListener("mousedown", handleClickOutside)
    }

    }, [isOpen])

  return { openPopup, closePopup, buttonRef, popupRef,  isOpen, position };
}