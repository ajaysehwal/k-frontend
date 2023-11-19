import { GalleryData } from "../../data/gallerydata";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../css/gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
export default function GalleryComponent() {
    const path = window.location.pathname;
    const navigate = useNavigate();
    const [index, setIndex] = useState(-1);

    return (
        <>

            <div style={{ width: '90%', margin: 'auto', textAlign: "center" }}>

                <div style={{ marginTop: "50px", marginBottom: '20px', padding: '10px', height: path == "/" ? "610px" : "", overflow: 'hidden' }} data-aos='fade-up'>
                    <h2 style={{ textAlign: 'center', color: 'black', marginBottom: "30px" }}>Our Gallery</h2>
                    <div id="gallerydiv">
                        {GalleryData?.map((el, i) => (
                            <img data-aos='fade-up' onClick={() => setIndex(i)} style={{ width: '100%', height: '400px' }} loading="lazy" src={el.src} alt={`${i}`} />
                        ))}
                    </div>
                    <Lightbox
                        slides={GalleryData}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </div>
                {path == '/' ? (
                    <a onClick={() => navigate('/gallery')} className="text-primary" style={{ textDecoration: 'underline', textAlign: 'center', margin: 'auto', cursor: 'pointer', fontSize: '20px' }}>View more</a>
                ) : ('')}

            </div>

        </>
    )
}