import "../ImageCarousel/carousel.css"


export default function CarouselItem({imageUrl, alt, isActive}){
    return(
        <div> 
         <img src={imageUrl} alt={alt} className={`imagecard ${isActive ? 'imagecard-active' : ''}`}/> 
        </div>
    )
}