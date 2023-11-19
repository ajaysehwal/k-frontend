import sec from "../../img/carousel-2.jpg"
import third from "../../img/carousel-1.jpg"
import VideoFirst from "../videos/first";
export default function Slider() {
  return (
    <>
     <div style={{width:'100%',margin:'auto',height:'100vh'}}>
     <div className="container-fluid px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" style={{width:'100%',height:'100vh'}}>
                        <VideoFirst/>
                        {/* <img src={first} style={{height:'100vh'}} width="100%" loading="lazy"  className="img-fluid" alt="First slide"/> */}
                       
                    </div>
                    <div className="carousel-item" style={{width:'100%',height:'100vh'}}>
                        <img src={sec} style={{height:'100vh'}} width="100%" loading="lazy"  className="img-fluid" alt="Second slide"/>
                       
                    </div>
                    <div className="carousel-item" style={{width:'100%',height:'100vh'}}>
                        <img src={third} style={{height:'100vh'}} width="100%" loading="lazy"    className="img-fluid" alt="Second slide"/>
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
     </div>
 
    </>
  )
}
