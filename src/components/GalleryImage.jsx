const GalleryImage = ({ Name, Url }) => {
  return (
    <div className="image-wrapper">
      <div className="image-container">
        <img src={Url} alt="gallery" />
      </div>
      <div className="image-caption-container">
        <h3>{Name}</h3>
      </div>
    </div>
  );
};

export default GalleryImage;
