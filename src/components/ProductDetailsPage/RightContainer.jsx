import "../../pages/productdetails.css"
import "../../pages/color-options.css"
import ArrowDown from "./down-arrow.svg"; // Import SVGs
import ArrowUp from "./up-arrow.svg";
import { useEffect, useState } from "react";

export default function RightContainer(){

    const [toggleArrow, setToggleArrow] = useState(false)
    const [accordianPosition, setAccordianPosition] = useState(0)
    const [dataArray, setDataArray] = useState([])

    const accordianData1 = {id: 1, title: "Details", data: {Fit : "Relaxed", Fabric: 
        "Heavy weight, 6.5 oz, 22-singles, 100% combed cotton (marles 15% viscose)",
        Construction : 
        "Neck ribbing, side seamed, shoulder to shoulder tape, double needle hems, preshrunk to minimise shrinkage", 
        Embellishment : 
        "Suited for screen printing, DTG and embroidery Find a printer/embroider near you here"}}
    const accordianData2 = {id: 2, title: "Companion Styles", data: {1:"Classic Tear Out Tee | 5026T",
            2: "Classic Organic Tee | 5026G",
            3: "Classic Minus Tee  5079",
            4: "Classic Plus Tee 5070"}}
        
    const accordianData3 = {id: 3, title: "Shipping and Returns", data: {Shipping: "We ship nationwide in the United States and Canada. Most in stock & credit-approved orders received by 2pm local time where order is being shipped from, will be processed the same day. There may be a slight delay during sale periods due to high volumes.", "1" : "Free shipping for orders over $500", 
             Returns: "If you're not satisfied with your purchase, please return the items for an exchange or credit. All returns must be made within 30 days of the invoice date with a completed returns form - for full terms and conditions see our returns page."
         }}
    const accordianData4 = {id:4, title: "Care Instructions" , data: ["1. Machine wash cold with like colours.",
            "2. Do not bleach.",
            "3. Do not tumble dry.",
            "4. Do not dry clean.",
            "5. Do not iron if printed.",
            "6:  Line dry in shade."]};
    const accordianData5 = {id: 5, title: "Wholesale Resources", categories: ["Download Product Info Sheet", "Access High Resolution Images"]}        

    const onSearchInputChange = () =>{

    }

    const decrementCountOfItems = () =>{

    }

    const incrementCountOfItems = () =>{

    }

    function getDataForAccordianOne() {
        const result = [];
    
        result.push({ title: accordianData1.title, data: accordianData1.data });
        result.push({ title: accordianData2.title, data: accordianData2.data });
        result.push({ title: accordianData3.title, data: accordianData3.data });
        result.push({ title: accordianData4.title, data: accordianData4.data });
        result.push({ title: accordianData5.title, data: accordianData5.categories });
    
        setDataArray([...dataArray, ...result]);
    }

     function traverseObject(inputObj){
        let result = [];
        console.log(141, inputObj)
      for(let key in inputObj.data){
        console.log(221, inputObj.data[key])
         result.push(inputObj.data[key])
      }
      console.log(111, result)
      return result;
     }

    useEffect(()=>{getDataForAccordianOne()}, [])

    const handleChange = (toggleValue, position)  =>{
        setToggleArrow(toggleValue)
        setAccordianPosition(position)
    }

    console.log(1212, dataArray)
    return(
        <div className="rightcontainer">
            <h5>MEN/APPAREL</h5>
            <h1>Classic Tee</h1>
            <h1>5026</h1>
            <p>The timeless AS Colour Classic Tee, ideal for printing with its relaxed fit and heavy weight 6.5 oz, 22-singles 100% combed cotton. Built to last with neck ribbing, side seams, shoulder-to-shoulder tape, and double needle hems, plus preshrunk fabric for minimal shrinkage.</p>
            <h2>$24.00</h2>
            <h5>See Bulk Discounts</h5>
            {/***CSS table like will be added */}

            <input type="text" value={{}} onChange={()=>{onSearchInputChange()}} placeholder="Search by colour" className="search-input"/>
            <span className="options-span">Color List</span> | <span className="options-span">Swatch</span>
            <p><span>Color:</span><span>Black</span></p>
            <div className="color-holder">
            <div className="colorblock-purple"></div>
            <div className="colorblock-aqua"></div>
            <div className="colorblock-cyan"></div>
            <div className="colorblock-red"></div>
            <div className="colorblock-yellow"></div>
            <div className="colorblock-yellowgreen"></div>
            <div className="colorblock-gray"></div>
            </div>
            <p>Size</p>
            <div className="btn-holder">
            <button onClick={{}} className="btn-sizes">SML</button>
            <button onClick={{}} className="btn-sizes">MED</button>
            <button onClick={{}} className="btn-sizes">LRG</button>
            <button onClick={{}} className="btn-sizes">XLG</button>
            <button onClick={{}} className="btn-sizes">2XL</button>
            <button onClick={{}} className="btn-sizes">3XL</button>
            <button onClick={{}} className="btn-sizes">4XL</button>
            <button onClick={{}} className="btn-sizes">5XL</button>
            </div>
         
                <div className="panel-weight">
                <div className="left-panel">
                    <div className="dec-panel" onClick={decrementCountOfItems}>-</div>
                    <div className="number">1</div>
                    <div className="inc-panel" onClick={incrementCountOfItems}>+</div>
                </div>
                <div className="right-panel">Add 1 item(s) to Cart</div>
                </div>

               <div className="accordian-container">
              <div className="accordian-title"  onClick={()=>{handleChange(toggleArrow=>!toggleArrow, 0)}}><h3>{accordianData1.title}</h3>
              <img
                src={toggleArrow ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
              </div> 
              {toggleArrow && accordianPosition==0 && <div className="accordian-content">{dataArray.map((dataItem, index)=>(
                index==0 ? (<ul>
                <p><span><strong>Fit</strong></span> : <span>{dataItem.data["Fit"]}</span></p>
                <p><span><strong>Fabric</strong></span> : <span>{dataItem.data["Fabric"]}</span></p>
                <p><span><strong>Construction</strong></span> : <span>{dataItem.data["Construction"]}</span></p>
                <p><span><strong>Embellishment</strong></span> : <span>{dataItem.data["Embellishment"]}</span></p>
                </ul>) : ""
                
              ))}</div> }
              </div>   


            <div className="accordian-container">
              <div className="accordian-title"  onClick={()=>{handleChange(toggleArrow=>!toggleArrow, 1)}}><h3>{accordianData2.title}</h3>
              <img
                src={toggleArrow ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
              </div> 
              {toggleArrow  && accordianPosition==1 && <div className="accordian-content">{dataArray.map((dataItem, index)=>(
                 index==1 ? (<ul>
                {traverseObject(dataItem).map((item)=>(
                    <p> <span><li>{item}</li></span></p>
                ))}
                
                </ul>) : ""
              ))}</div> }
              </div> 


             <div className="accordian-container">
              <div className="accordian-title"  onClick={()=>{handleChange(toggleArrow=>!toggleArrow, 3)}}><h3>{accordianData3.title}</h3>
              <img
                src={toggleArrow ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
              </div> 
              {toggleArrow && accordianPosition==3 && <div className="accordian-content">{dataArray.map((dataItem, index)=>(
               index==2 ? ( <ul>
                 <p><span><strong>Shipping</strong></span> : <span>{dataItem.data["Shipping"]}</span></p>
                 <p><span><strong>Returns</strong></span> : <span>{dataItem.data["Returns"]}</span></p>
                </ul>) : ""
              ))}</div>}
              </div>    


              <div className="accordian-container">
              <div className="accordian-title"  onClick={()=>{handleChange(toggleArrow=>!toggleArrow, 4)}}><h3>{accordianData4.title}</h3>
              <img
                src={toggleArrow ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
              </div> 
              {toggleArrow && accordianPosition==4 && <div className="accordian-content">{dataArray.map((dataItem, index)=>(
               index==3 ? ( <ul>
                  {dataItem.data.map((item)=>(
                    <li>{item}</li>
                  ))}
                </ul>) : ""
              ))}</div>}
              </div>   


              <div className="accordian-container">
              <div className="accordian-title"  onClick={()=>{handleChange(toggleArrow=>!toggleArrow, 5)}}><h3>{accordianData5.title}</h3>
              <img
                src={toggleArrow ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
              </div> 
              {toggleArrow && accordianPosition==5 && <div className="accordian-content">{dataArray.map((dataItem, index)=>(
               index==4 ? ( <ul>
                  {dataItem.data.map((item)=>(
                    <div className="spanholder">
                    <p>{item}</p>
                    </div>
                  ))}
                </ul>) : ""
              ))}</div>}
              </div> 
         
        </div>
    )
}