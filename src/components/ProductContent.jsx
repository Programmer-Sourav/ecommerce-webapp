import "../pages/hstyles.css"
import SideNavigation from "./NavAccordian/SideNavigation"
import PopupMenu from "./PopupMenu/PopupMenu"
import "../components/PopupMenu/popup.css"

export default function ProductContent(){

 const { openPopup, closePopup, buttonRef, isOpen, position, popupRef } = PopupMenu();

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
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee1 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee2 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee3 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee4 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee5 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee6 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee7 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee8 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee9 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee10 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee11 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                <div className="product-item">
                <img src="https://via.placeholder.com/150" alt="Classic Tee"/>
                <h4>Classic Tee12 | 5026</h4>
                 <p><span class="original-price">$22.00</span> <span class="sale-price">SALE $15.40</span></p>
                 <p>Relaxed Fit - 6.5 oz</p>
                </div>
                </section>
             </main>
        </div>
    )
}