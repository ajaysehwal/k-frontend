import {All} from "../../data/gallerydata";
import "../../css/gallery.css";
import Host from "../Secret/serverapi";
import { useNavigate } from "react-router-dom";
export default function GalleryComponent(){
    const path=window.location.pathname;
    const navigate = useNavigate();
    return(
     <> 
    
     <div style={{width:'90%',margin:'auto',textAlign:"center"}}>
  
     <div style={{marginTop:"50px",marginBottom:'20px',padding:'10px',height:path=="/"?"610px":"",overflow:'hidden'}} data-aos='fade-up'>
     <h2 style={{textAlign:'center',color:'black'}}>Our Gallery</h2>
       <div  id="gallerydiv">
           {All()?.map((el)=>(
            <img data-aos='fade-up' style={{width:'100%',height:'300px'}}  src={`${Host()}${el}`} alt={el} />
           ))}
       </div>
   
     </div>
     {path=='/'?(
         <a onClick={()=>navigate('/gallery')}  className="text-primary" style={{textDecoration:'underline',textAlign:'center',margin:'auto',cursor:'pointer',fontSize:'20px'}}>View more</a>
     ):('')}
    
     </div>
      
     </>
    )
}