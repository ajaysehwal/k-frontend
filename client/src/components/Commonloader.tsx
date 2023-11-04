import Lottie from "lottie-react";
import loader from "./animations/Animation - 1697886837702.json";
export const CommonLoader=()=>{
    return <div style={{width:'200px',height:"200px",margin:'auto'}}><Lottie animationData={loader} loop={true}/> </div>
       
}