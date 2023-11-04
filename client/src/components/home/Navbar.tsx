import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
export default function Navbar(){
    const path=window.location.pathname;
    const navigate = useNavigate();
    const PageNavigate=(to:string)=>{
        navigate(to)
     }
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 10) {
           setScrolled(true);
         } else {
           setScrolled(false);
         }
        
       };
   
       window.addEventListener('scroll', handleScroll);
   
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);
  
   
    return(
        <>
           <div className="container-fluid" style={{background:scrolled?"rgb(24,66,182)":path=='/'?'transparent':"rgb(24,66,182)",position:"fixed",width:'100%',top:scrolled?"0%":path=='/'?"8%":"6%",zIndex:999,transition:"0.3s ease"}} >
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <a href="/" className="navbar-brand">
                        <h2 className="text-white">Dream Design<span className="text-secondary"> Architect</span> </h2>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                      
                            <a onClick={()=>PageNavigate('/')} style={{cursor:'pointer'}} className={path=='/'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>Home</a>
                            <a onClick={()=>PageNavigate('/aboutus')} style={{cursor:'pointer'}} className={path=='/aboutus'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>About</a>
                            <a onClick={()=>PageNavigate('/gallery')} style={{cursor:'pointer'}}  className={path=='/gallery'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>Gallery</a>
                            <a onClick={()=>PageNavigate('/projects')} style={{cursor:'pointer'}} className={path=='/projects'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>Projects</a>
                            {/* <a onClick={()=>PageNavigate('/blogs')} style={{cursor:'pointer'}}  className={path=='/blogs'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>Our Blog</a> */}
                            <a onClick={()=>PageNavigate('/contact')} style={{cursor:'pointer'}}  className={path=='/contact'?"nav-item nav-link active text-secondary":"nav-item nav-link"}>Contact</a>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: +91 9896622464</span>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
                        </div> */}
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}