import "../pages/hstyles.css"
import SideNavigation from "./NavAccordian/SideNavigation"
import PopupMenu from "./PopupMenu/PopupMenu"
import "../components/PopupMenu/popup.css"
import Carousel from "./ImageCarousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../data/productdata";
import { useEffect, useState } from "react";

export default function ProductContent(){

 const { openPopup, closePopup, buttonRef, isOpen, position, popupRef } = PopupMenu();
 const dispatch = useDispatch();
 const {products, status, error, selectedFilters} = useSelector((state)=>state.products)
 const [dummyProducts, setDummyProducts] = useState(productsData)

 const filteredData = dummyProducts;

 useEffect(()=>{
   if(selectedFilters.length>0){
        
   }
 }, [selectedFilters])


 const loadmore = () =>{

 }
 
 const listOfFilters = [{id: 1, title: "Featured"},{id: 2, title: "Newest"}, {id: 3, title: "Price: Low to High"},{id: 4, title: "Price: High to Low"}, {id:5, title: "Best Selling"} ]
    return(
        <div> 
             <header class="header-pc">
             <div className="header-right">

             <span className="sort-icon-flex" ref = {buttonRef} onClick={()=>{openPopup()}}>
             <span class="material-icons sort-icon">sort</span>
             <label for="sort-options">Sort by:</label>
             {isOpen && (
              <div className="parent">
              <div className="popup" ref = {popupRef} style={{position: "absolute", top: position.top, left: position.left}}> 
              {isOpen && <div className="popup-content"> 
                {/* <p className="close" onClick={closePopup}>&times;</p> */}
                 {listOfFilters.map((filterItem)=>(
                    <p className="filter-item">{filterItem.title}</p>
                 ))}
               </div>}
            </div>
            </div>
        )}
             <span class="material-icons keyboard_arrow_down">keyboard_arrow_down</span>
             </span> 
               

             <span className="right-side-flex">
             <span>Model </span>
             <span>|</span>
             <span>Product</span>
             </span> 

            </div>
             </header>
             <main className="main-content">
                <aside className="filter-sidebar">
                <h3>Selected Filter (0)</h3>
                 {/* <ul>
                 <li>Product Type</li>
                 <li>Core Range</li>
                 <li>Colour</li>
                 <li>Size</li>
                 <li>Weight</li>
                 <li>Fit</li>
                </ul> */}
                <SideNavigation/>
                </aside>
             <button onClick={()=>{}} className="btn-content"> <span class="material-symbols-outlined">filter_list</span>0 Filter Selected <span class="material-icons keyboard_arrow_up">keyboard_arrow_up</span></button>
             <section class="promo-banner">
             <p>30% off <span>Everything</span> <span class="sale">SALE</span></p>
             </section>
                <section className="product-grid">
                {/* <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/> */}
                {dummyProducts.map((product)=>(
                  <Carousel/>
                ))}
                <div className="loadmoreparent">
                <button onClick={loadmore} className="loadmore">Load More</button>
                </div>
                </section>
             </main>
        </div>
    )
}