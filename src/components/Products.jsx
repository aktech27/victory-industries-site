import Logo from "../assets/logo.png";
import Logo1 from "../assets/main-poster.jpeg";
import Product from "./Product";
import "./Products.css";
const Products = () => {
  let productsArray = [
    { name: "Product 1", image: Logo },
    { name: "Product 2", image: Logo1 },
    { name: "Product 3", image: Logo },
    { name: "Product 4", image: Logo1 },
    { name: "Product 5", image: Logo },
    { name: "Product 6", image: Logo1 },
    { name: "Product 7", image: Logo },
  ];
  return (
    <section id="products">
      <h1>Our Products</h1>
      <div className="carousal">
        {productsArray.map((product) => (
          <Product Name={product.name} Image={product.image} />
        ))}
      </div>
    </section>
  );
};

export default Products;
