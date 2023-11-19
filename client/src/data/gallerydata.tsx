import { All } from "./projectdetails";
export const GalleryData = All()?.map(url => ({
    src: url,
    loading: "lazy",
    alt: "1",
    width: 1000,
    height: 500
  }));