import "../shimmer.css"

export default function ShimmerItem(){


    return(
        <div> 
         <img alt="image is loading..." loading="lazy" className={`imagecard-sh ${isActive ? 'imagecard-sh-active' : ''}`}/> 
        </div>
    )
}