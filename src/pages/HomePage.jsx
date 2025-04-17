import "../stylesheets/homepage.css"
import { useEffect, lazy, Suspense } from "react";
import LoadingIndicators from "./LoadingIndicators";

const  BodyContent = lazy(()=>import("../components/BodyContent"))
const  Header = lazy(()=>import("../components/Header"))
const  ProductContent = lazy(()=>import("../components/ProductContent"))
const  Footer = lazy(()=>import("../components/Footer"))

export default function HomePage(){

    return(
        <div className="container"> 
        <Suspense fallback={<LoadingIndicators/>}>
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
            </Suspense>
        </div>
    )
}