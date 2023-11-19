import "./css/bootstrap.min.css";
import "./css/style.css";
import Index from './pages';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/home/Navbar';
import About from "./components/home/About";
import Contact from "./components/home/contact";
import Project from "./components/home/Project";
import { Suspense } from "react";
import { Loader } from "./components/Loader"
import { useEffect, useState } from "react";
import { CommonLoader } from "./components/Commonloader"
import { useLocation } from "react-router-dom";
import GalleryComponent from "./components/home/Gallery";
import Projectdetails from "./components/home/projectdetails";
function App() {
  const [loading, setloading] = useState(true);
  const [commonload,setcommonload]=useState(false);
   const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])
  useEffect(() => {
    setcommonload(true);
    const loadingTimeout = setTimeout(() => {
      setcommonload(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [location]);
 
  return loading ? <Loader /> : (
    <>
     
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<CommonLoader />}>
            <Index />
          </Suspense>
        } />
        <Route path='/aboutus' element={commonload?<CommonLoader/>:
          <Suspense fallback={<CommonLoader />}>
            <About />
          </Suspense>
        } />
         <Route path='/projects/:type' element={commonload?<CommonLoader/>:
          <Suspense fallback={<CommonLoader />}>
            <Projectdetails />
          </Suspense>
        } />
        <Route path='/gallery' element={commonload?<CommonLoader/>:
          <Suspense fallback={<CommonLoader />}>
           <GalleryComponent/>
          </Suspense>
        } />
        <Route path='/contact' element={commonload?<CommonLoader/>:
          <Suspense fallback={<CommonLoader />}>
            <Contact />
          </Suspense>
         } />
        <Route path='/projects' element={commonload?<CommonLoader/>:
          <Suspense fallback={<CommonLoader />}>
            <Project />
          </Suspense>

        } />
      
      </Routes>
     

    </>
  )
}

export default App
