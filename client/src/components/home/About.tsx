import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
export default function About() {
  return (
    <div> <div className="container-fluid py-5 my-5">
    <div className="container pt-5">
        <div className="row g-5">
            <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s" data-aos="fade-right">
                <div className="h-100 position-relative">
                    <img src={about1} className="img-fluid w-75 rounded" alt="" style={{marginBottom: "25%"}}/>
                    <div className="position-absolute w-75" style={{top: "25%", left: "25%"}}>
                        <img src={about2} className="img-fluid w-100 rounded" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s" data-aos="fade-left">
                <h5 className="text-primary">About Us</h5>
                <h1 className="mb-4">About Dream Design Architects And It's Innovative Solutions</h1>
                 <h3 style={{color:"rgb(95, 93, 93)"}}>Hands-on approach</h3>
                <p className="mb-4">
                Our team and our principal architects personally oversee each project from start to finish, ensuring that every detail is executed to the highest standards. This level of attention to detail helps to create successful projects and has earned the firm a reputation for excellence and reliability</p>
                <h3 style={{color:"rgb(95, 93, 93)"}}>Contemporary style</h3>
                <p className="mb-4">
                DREAM DESIGN Architects takes inspiration from the local environment and blends it with modern design elements to create unique, functional, and aesthetically pleasing spaces. This approach allows us to create designs that are both visually striking and contextually relevant.</p>
                <h3 style={{color:"rgb(95, 93, 93)"}}>Comprehensive approach</h3>
                <p className="mb-4">
                In addition to our architectural work, we also have experience in interior design, planning, and landscape design. This allows us to create cohesive designs that seamlessly integrate both the exterior and interior spaces of a building.</p>
                <h3 style={{color:"rgb(95, 93, 93)"}}>Personalized service</h3>
                <p className='mb-4'>
                DREAM DESIGN Architects is dedicated to providing personalized design and service, working closely with clients to understand their needs and preferences. This level of attention helps to create designs that are tailored to the specific needs of each client, resulting in successful projects and satisfied customers
                </p>
                {/* <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a> */}
            </div>
        </div>
    </div>
</div>
</div>
  )
}
