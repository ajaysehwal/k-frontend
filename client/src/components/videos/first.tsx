export default function VideoFirst() {
  return (
    <>
       <div className='video-wrapper' >
      <video  preload="metadata" style={{width:'100%',overflow:'hidden'}} className="video" autoPlay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/dreamdesignarchitects-a95fc.appspot.com/o/1.mp4?alt=media&token=c618cad3-42a1-45ca-aa8a-b0b3e10f34f4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       </div>
       
      
    
    </>
  )
}
