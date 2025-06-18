import { useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
const LazyHeader = lazy(()=>import('./components/Header'))
const LazyBodyContent = lazy(()=>import("./components/BodyContent"))
const LazyProductContent = lazy(()=>import("./components/ProductContent"))
const LazyHomePage = lazy(()=>import("./pages/HomePage"))
const LazySudeNavigation = lazy(()=>import("./components/NavAccordian/SideNavigation"))
const LazyPopup = lazy(()=>import('./components/PopupMenu/PopupMenu'))
const LazyUsePopup = lazy(()=>import('./components/PopupMenu/UsePopup'))
const LazyCarousel = lazy(()=>import("./components/ImageCarousel/Carousel"))
const LazyProductDetails = lazy(()=>import('./pages/ProductDetails'))
const LazyRegionCheckModal = lazy(()=>import('./components/RegionCheck/RegionCheckModal'))
const LazyProductDetailsPage = lazy(()=>import('./pages/ProductDetailsPage'))
import LoadingIndicators from './pages/LoadingIndicators'
import MidInfoPanel from './components/ProductDetailsPage/MidInfoPanel'
import AlreadyBoughtItem from './components/AlreadyBoughtItem'
import CartPage from "./pages/CartPage"
import LeftCheckout from "./components/LeftCheckout"
import RightCheckout from "./components/RightCheckout"
import Checkout from "./pages/Checkout"





function App() {

  return (
    <>
    <Suspense fallback = {<LoadingIndicators/>}>
      {/* <LazyHeader/> */}
       {/* <LazyBodyContent/> */}
        {/* <LazyProductContent/> */}
          {/* <LazyHomePage/> */}
          {/* <LazyRegionCheckModal/> */}
         {/* <LazyProductDetails/> */}
         {/* <LazyProductDetailsPage/> */}
         {/* <LazySudeNavigation/>
        <LazyPopup/>
        <LazyUsePopup/>
      <LazyCarousel/> */}
      {/* <MidInfoPanel/> */}
      <Routes>
        <Route path='/' element={<LazyHomePage/>}/>
        <Route path='/home' element={<LazyHomePage/>}/>
        <Route path='/product_details' element={<LazyProductDetailsPage/>}/>
        <Route path='/already_bought' element={<AlreadyBoughtItem/>}/>
        <Route path='/cartmodal' element={<CartPage/>}/>
        <Route path='/leftco' element={<LeftCheckout/>}/>
        <Route path='/rightco' element={<RightCheckout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
