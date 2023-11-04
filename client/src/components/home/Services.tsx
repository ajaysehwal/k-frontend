import { ServicesData } from '../../data/ServicesData'
export default function Services() {
  return (
    <div>
        <div className="container-fluid services py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>
                <div className="row g-5 services-inner">
                     {ServicesData?.map((el:{icon:string,heading:string,p:string})=>(

                    
                    <div  data-aos="fade-up" className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className={el.icon}></i>
                                    <h4 className="mb-3">{el.heading}</h4>
                                    <p className="mb-4">{el.p}</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                  
                </div>
            </div>
        </div>
    </div>
  )
}
