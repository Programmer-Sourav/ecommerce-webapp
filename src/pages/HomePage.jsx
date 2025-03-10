import "../stylesheets/homepage.css"

import BodyContent from "../components/BodyContent";
import Header from "../components/Header";
import ProductContent from "../components/ProductContent";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function HomePage(){

    return(
        <div className="container"> 
            <div>
            <Header/>
            </div>
            <div>
            <BodyContent/>
            </div>
            <div>
            <ProductContent/>
            </div>
            <Footer/>
        </div>
    )
}