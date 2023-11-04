import video from "../../assets/video/1.mp4";
export default function VideoFirst() {
  return (
    <>
       <div className='video-wrapper'>
      <video style={{width:'100%',overflow:'hidden'}} className="video" autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       </div>
       
      
    
    </>
  )
}
