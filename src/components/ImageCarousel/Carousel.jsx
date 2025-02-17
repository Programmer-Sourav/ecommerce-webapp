import { useEffect, useRef, useState } from "react"

import CI1 from "../../assets/ci1.jpg"
import CI2 from "../../assets/ci2.jpg"
import CI3 from "../../assets/ci3.jpg"
import CI4 from "../../assets/ci4.png"
import CarouselItem from "./CarouselItem"
import "../ImageCarousel/carousel.css"


import LeftArrow from "../../assets/left-arrow.svg"
import RightArrow from "../../assets/right-arrow.png"

import Atlantic from "../../assets/colors/atlantic.jpg"
import BrightRoyal from "../../assets/colors/bright-royal.jpg"
import PaleBlue from "../../assets/colors/pale-blue.jpg"
import PalePink from "../../assets/colors/pale-pink.jpg"
import PetrolBlue from "../../assets/colors/petrol-blue.jpg"
import PineGreen from "../../assets/colors/pine-green.jpg"
import Pistachio from "../../assets/colors/pistachio.jpg"
import Plum from "../../assets/colors/plum.jpg"
import Sand from "../../assets/colors/sand.jpg"
import Storm from "../../assets/colors/storm.jpg"
import Walnut from "../../assets/colors/walnut.jpg"
import White from "../../assets/colors/white.jpg"
import WhiteHeather from "../../assets/colors/white-heather.jpg"
import Yellow from "../../assets/colors/yellow.jpg"

export default function Carousel(){

    const [slide, setSlide] = useState(0)
    
    const arrayOfImages = [{id: 1, imageUrl: CI1, alt: "image1"},
        {id: 2, imageUrl: CI2, alt: "image2"},
        {id: 3, imageUrl: CI3, alt: "image3"},
        {id: 4, imageUrl: CI4, alt: "image4"}
    ]

    const arrayOfColors = [{id: 1, imageUrl: Atlantic, alt: "atlantic"}, 
    {id: 2, imageUrl: BrightRoyal, alert: "bright-royal"},
    {id: 3, imageUrl: BrightRoyal, alert: "bright-royal"},
    {id: 4, imageUrl: PaleBlue, alert: "bright-royal"},
    {id: 5, imageUrl: PalePink, alert: "bright-royal"},
    {id: 6, imageUrl: PetrolBlue, alert: "bright-royal"},
    {id: 7, imageUrl: PineGreen, alert: "bright-royal"},
    {id: 8, imageUrl: Pistachio, alert: "bright-royal"},
    {id: 9, imageUrl: Plum, alert: "bright-royal"},
    {id: 10, imageUrl: Sand, alert: "bright-royal"},
    {id: 11, imageUrl: Storm, alert: "bright-royal"},
    {id: 12, imageUrl: Walnut, alert: "bright-royal"},
    {id: 13, imageUrl: White, alert: "bright-royal"},
    {id: 14, imageUrl: WhiteHeather, alert: "bright-royal"},
    {id: 15, imageUrl: Yellow, alert: "bright-royal"},
    ]

    const selectedElementRef = useRef(null);

    const previousSlide = () => {
         setSlide(slide === 0 ? arrayOfImages.length-1 : slide-1 )
    }

    const nextSlide = () =>{
        setSlide(slide === arrayOfImages.length-1 ? 0 : slide+1)
    }

   
    const handleScroll = () =>{
        console.log(handleScroll)
        window.addEventListener("scroll", handleScrollFor)
      }


      const handleScrollFor = () => {
        if (selectedElementRef.current) {
            console.log("Scroll Left:", selectedElementRef.current.scrollLeft);
          }
      };
      
      const scrollLeft = () => {
        if(selectedElementRef.current){
        console.log("Scrolling Left");
        selectedElementRef.current.scrollBy({ left: -256, behavior: "smooth" }); // Scroll left by 256px
        handleScrollFor();
        }
      };
      
      const scrollRight = () => {
        if(selectedElementRef.current){
        console.log("Scrolling Right");
        selectedElementRef.current.scrollBy({ left: 256, behavior: "smooth" }); // Scroll right by 256px
        handleScrollFor();
        }
      };
 
    

    return(
        <div className="itemcontainer">
        <div className="carousel-container"> 
         <img src={LeftArrow} alt="left-arrow" onClick={previousSlide} className="arrow arrow-left"/>

            {
            arrayOfImages.map((item, index)=>(
                <CarouselItem key={index} imageUrl={item.imageUrl} alt={item.alt} isActive={slide === index} />
            ))
            }
            <span className="indicators">
                {
                    arrayOfImages.map((item, index)=>(
                        <button key={index} className={`indicator ${slide!==index ?'indicator-inactive' : ''}`} onClick={()=>setSlide(index)}></button>
                    ))
                }
            </span>

            <img src={RightArrow} alt="right-arrow" onClick={nextSlide} className="arrow arrow-right"/>
          
        </div>
        <h3>Hoody!</h3>
        <p>Rs. 2500</p>
       
        <div className="colorcontainerparent">
        <img src={LeftArrow} alt="left-arrow" onClick={scrollLeft} className="arrow1 arrow1-left"/>
        <div className="colorcontainer" ref={selectedElementRef}>
        {
            arrayOfColors.map((colorItem)=>(
                <img src={colorItem.imageUrl} alt={colorItem.alt} width="72px" height="72px" key={colorItem.id}/>
            ))
        }
        </div>
        <img src={RightArrow} alt="right-arrow" onClick={scrollRight} className="arrow1 arrow1-right"/>
        </div>
        </div>
    )
}