import "../../css/projectsimages.css";
import { useParams } from "react-router-dom";

import {
  Commercial,
  All,
  Landscape,
  Residentional,
  Institiutional,
  Interior,
} from "../../data/projectdetails";
export default function Projectdetails() {
  const { type } = useParams();

  return (
    <>
      <h2 style={{ textAlign: "center", color: "black", marginTop: "100px" }}>
        {type}
      </h2>

      <div id="projectbox1">
        {type == "All"
          ? All()?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : type == "Landscape"
          ? Landscape?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : type == "Residentional"
          ? Residentional?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : type == "Interior"
          ? Interior?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : type == "Institiutional"
          ? Institiutional?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : type == "Commercial"
          ? Commercial?.map((el, index) => (
              <div className="image-zoom">
                {" "}
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: "100%", height: "400px" }}
                  key={index}
                  src={el}
                  alt={`Image ${index}`}
                />
              </div>
            ))
          : "loading..."}
      </div>
    </>
  );
}
