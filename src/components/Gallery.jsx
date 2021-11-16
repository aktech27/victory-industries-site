import "./Gallery.css";
import GalleryImage from "./GalleryImage";
import { imagesArray, videosArray } from "../assets/galleryData";
const Gallery = () => {
  return (
    <section id="gallery">
      <h1>Gallery</h1>
      <div>
        <h2>Images</h2>
        <div className="gallery-media">
          {imagesArray.map((image) => (
            <GalleryImage Name={image.name} Url={image.Url} key={Math.random.toString()} />
          ))}
        </div>
      </div>
      <div>
        <h2>Videos</h2>
        <div className="gallery-media">
          {videosArray.map((video) => (
            <div className="video-container" key={Math.random.toString()}>
              <iframe
                width="100%"
                height="100%"
                src={video.Url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
