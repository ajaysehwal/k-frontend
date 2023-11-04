import first from "../../assets/front.jpg";
import sec from "../../img/carousel-2.jpg"
import third from "../../img/carousel-1.jpg"
export default function Slider() {
  return (
    <>
     <div style={{width:'100%',margin:'auto',height:'600px'}}>
     <div className="container-fluid px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>

                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" style={{width:'100%',height:'600px'}}>
                        <img src={first} style={{height:'100vh'}} width="100%"  className="img-fluid" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInRight">If you can dream it, we can design it.</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">we believe that architecture is more than just bricks and mortar; it's about shaping spaces that inspire, innovate, and endure.</p>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{width:'100%',height:'600px'}}>
                        <img src={sec} style={{height:'100vh'}} width="100%"  className="img-fluid" alt="Second slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInLeft">At dream design architect</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown"> We are dedicated to transforming your dreams and visions into beautifully designed, functional, and sustainable spaces</p>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{width:'100%',height:'600px'}}>
                        <img src={third} style={{height:'100vh'}} width="100%"    className="img-fluid" alt="Second slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInLeft">If you can dream it, we can design it.</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown"> We are dedicated to transforming your dreams and visions into beautifully designed, functional, and sustainable spaces</p>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
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
