import "../stylesheets/body-content.css"


export default function BodyContent(){

    

    return(
        <div className="top-container"> 
        <div className="top-content">
        <h2>Find Your New Favorite T-Shirt</h2>
        <p>Discover our collection of T-Shirts, each designed with the utmost care and attention to detail, and in a style matching your personal preferences.</p>
        <div className="top-bottom-panel">
         <button>All T-Shirts</button> 
         <button>Organic</button> 
         <button>Basic</button> 
         <button>Staple</button>   
         <button>Classic</button> 
         <button>Heavy</button> 
        </div>
        <div>
           <span className="lw">Light weight</span>
           <span className="line"></span>
           <span className="lw">Heavy weight</span>  
        </div>
        </div>
        </div>
    )
}