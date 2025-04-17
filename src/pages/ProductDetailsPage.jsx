import { lazy, Suspense } from "react"
// import Header from "../components/Header"
const LazyHeader = lazy(()=>import('../components/Header'))
const LazyProductDetails = lazy(()=>import('./ProductDetails'))
// import ProductDetails from "./ProductDetails"
import "./productpage.css"

export default function ProductDetailsPage(){




    return(
        <div className="pagecontainer">
            <Suspense fallback={<div> Loading... </div>}>
            <LazyHeader/>
            <LazyProductDetails/>
            </Suspense>
        </div>
    )
}