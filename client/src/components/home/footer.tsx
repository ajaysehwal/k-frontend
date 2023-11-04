export default function Footer() {
  return (
    <div>
           <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h2 className="text-white fw-bold d-block">Dream Design<span className="text-secondary"> Architect</span> </h2>
                        </a>
                        <p className="mt-4 text-light">we believe that architecture is more than just bricks and mortar; it's about shaping spaces that inspire, innovate, and endure.</p>
                        <div className="d-flex hightech-link">
                            {/* <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a> */}
                            {/* <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a> */}
                            <a href="https://instagram.com/dreams_design_architect?igshid=OGQ5ZDc2ODk2ZA==" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                            {/* <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Short Link</a>
                        <div className="mt-4 d-flex flex-column short-link">
                            <a href="/aboutus" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About us</a>
                            <a href="/contact" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
                            <a href="/projects" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Projects</a>
                            <a href="/blogs" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog</a>
                        </div>
                    </div>
                   <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Contact Us</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a  className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i>                      BHARAT NAGAR, BABAL ROAD PANIPAT,132103
</a>
                            <a className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i>   +91 9896622464</a>
                            <a href="mailto:dreamdesignarchitects.here@gmail.com" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> dreamdesignarchitects.here@gmail.com</a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Dream Design Architect</a>, All right reserved.</span>
                    </div> 
                    <div className="col-md-6 text-center text-md-end">
                       
                        <span className="text-light">Designed By<a href="https://htmlcodex.com" className="text-secondary"> Ajay Sehwal</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
