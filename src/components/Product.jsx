import "./Products.css";

const Product = ({ Name, Image }) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={Image} alt="product"></img>
      </div>
      <div className="product-name-container">
        <h3>{Name}</h3>
      </div>
    </div>
  );
};

export default Product;
