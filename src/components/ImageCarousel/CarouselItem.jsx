import "../ImageCarousel/carousel.css"


export default function CarouselItem({imageUrl, alt, isActive}){
    return(
        <div> 
         <img src={imageUrl} alt={alt} loading="lazy" className={`imagecard ${isActive ? 'imagecard-active' : ''}`}/> 
        </div>
    )
}