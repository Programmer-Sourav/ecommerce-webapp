import "../stylesheets/header.css"

import Logo from "../assets/ascolor-logo.png"
import LogoAvif from "../assets/ascolor-logo.avif"
import LogoWebP from "../assets/ascolor-logo.webp"
import { useEffect, useState } from "react"

export default function Header(){

    const [showHamburgerMenu, setHamburgerMenu] = useState(false)

    function changeHamburgerMenu(){
        console.log(123, showHamburgerMenu)
       setHamburgerMenu(showHamburgerMenu=>!showHamburgerMenu)
    }


    let lastScrollTop = 0; // Store the last scroll position
    const header = document.querySelector('.header');
    
    useEffect(()=>{
    
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
        
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)'; // Hide header
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)'; // Show header
            }
        
            lastScrollTop = currentScroll; // Update the last scroll position
        });
    
    
    }, [])


    return(
        <header className="header"> 
        <div className="logocontainer">
        <span class="material-icons menu-icon" id="menu-toggle" onClick={()=>{changeHamburgerMenu()}}>menu</span>
            <picture>
                <source srcSet={LogoAvif} type="image/avif"/>
                <source srcSet={LogoWebP} type="image/webp"/>
                <img src={Logo} alt="company-logo" className="logo-container"/>
            </picture>
        </div>
        <div className="nav-menu">
            <h4 onClick={() => handleNavigation('/men')}>Men</h4>
            <h4 onClick={() => handleNavigation('/women')}>Women</h4>
            <h4 onClick={() => handleNavigation('/headwear')}>Headwear</h4>
            <h4 onClick={() => handleNavigation('/accessories')}>Accessories</h4>
            <h4 onClick={() => handleNavigation('/kids')}>Kids</h4>
            <h4 onClick={() => handleNavigation('/sales')}>Sale</h4>
            <h4 onClick={() => handleNavigation('/about')}>About</h4>
         </div>
         {showHamburgerMenu ? <div className="menu-list">
            <ul>
            <li><h4 onClick={() => handleNavigation('/men')}>Men</h4></li>
            <li><h4 onClick={() => handleNavigation('/women')}>Women</h4></li>
            <li><h4 onClick={() => handleNavigation('/headwear')}>Headwear</h4></li>
            <li><h4 onClick={() => handleNavigation('/accessories')}>Accessories</h4></li>
            <li><h4 onClick={() => handleNavigation('/kids')}>Kids</h4></li>
            <li><h4 onClick={() => handleNavigation('/sales')}>Sale</h4></li>
            <li><h4 onClick={() => handleNavigation('/about')}>About</h4></li>
            </ul>
         </div> : ""}
         <div className="login-menu">
            <button className="top-nav-btn">Search</button>
            <button className="top-nav-btn">Cart</button>
            <button className="top-nav-btn">Sign In</button>
            <button className="top-nav-btn-2">Create Account</button>
         </div>
         <div class="login-menu-icons">
         <span class="material-icons nav-icon">search</span>
         <span class="material-icons nav-icon">shopping_cart</span>
         <span class="material-icons nav-icon">account_circle</span>
      </div>
        </header>
    )
}