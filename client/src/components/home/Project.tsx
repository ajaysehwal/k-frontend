import { ProjectData } from '../../data/ProjectData';
import { useNavigate } from "react-router-dom";

import "../../css/imageonhover.css"
export default function Project() {
  const navigate = useNavigate();
  const PageNavigate=(to:string)=>{
    navigate(to)
 }
  return (
    <div>
    <div className="container-fluid project py-5 mb-5" style={{marginTop:'50px'}}>
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <div  id="projectbox" >
                    {ProjectData?.map((el:{img:string,heading:string})=>(
                         <div onClick={()=>PageNavigate(`/projects/${el.heading}`)} data-aos="fade-up" className="image-zoom" style={{cursor:'pointer'}}>
                          <img style={{width:'100%',height:'400px'}} src={el.img} alt="" />
                          <p className="image-tag">{el.heading}</p>
                       </div>
                  ))}
              </div>
            </div>
        </div>
    </div>
  )
}
