import Slider from '../components/home/slider'
import About from '../components/home/About';
import Project from '../components/home/Project';
// import Blog from '../components/home/Blog';
import Contact from '../components/home/contact';
import GalleryComponent from "../components/home/Gallery";
import VideoFirst from '../components/videos/first';
export default function Index() {
  return (
    <div>
      
        <Slider/>
         <About/>
         <VideoFirst/>
        <GalleryComponent/>
       
        <Project/>
        {/* <Blog/> */}
        <Contact/>
      
    </div>
  )
}
