import { useEffect, useState } from "react"
import "./sidenavigation.css"
import { productNavigationData } from "../../data/productdata"
import ExpandIcon from "../../assets/expand.png"
import CollapseIcon from "../../assets/collapse.png"

export default function SideNavigation(){

  const [navigationData, setNavigationData] = useState(productNavigationData)
  const [elementsStored, setElementsStored] = useState([])


function getTheAccordians(){
    const elements = [];
  for(let key in navigationData){
    const keyObj = {id: elements.length+1, genre: key, items: navigationData[key], isExpanded: false}
    elements.push(keyObj)
  }
  return elements;
}


useEffect(()=>{
    const elements = getTheAccordians();
    setElementsStored([...elementsStored, ...elements])
}, [])
const expandOrCollapse = (genreId, value) =>{
  const updated = elementsStored.map((item)=>item.id===genreId ? {...item, isExpanded: value} : item)
  setElementsStored(updated)
}


const onCheckboxChange = () =>{

}

    return(
        <div className="accordian"> 
            {
                elementsStored && elementsStored.map((itemObj)=>(
                    <div className="accordianitem">
                     {
                        <>
                        <h4><span className="accordian-title">{itemObj.genre}</span> <span><img src={itemObj.isExpanded? CollapseIcon : ExpandIcon} alt="expand" width="16px" height="16px"  onClick={()=>{expandOrCollapse(itemObj.id, itemObj.isExpanded ? false : true)}}/></span></h4>
                        {itemObj.items && itemObj.items.map((eachItem)=>(
                            <ul className={`accordion-content ${itemObj.isExpanded ? "open" : ""}`}>
                            <li key={eachItem.id}><input type="checkbox" checked={{}} onChange={()=>{onCheckboxChange()}}/> {" "}{eachItem}</li>
                            </ul>
                        ))}
                       </>
                     }
                    
                    </div>
                ))
            }
        </div>
    )
  
}
