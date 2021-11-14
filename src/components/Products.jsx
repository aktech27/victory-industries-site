import Logo from "../assets/logo.png";
import Pic1 from "../assets/Din-plain.jpg";
import Pic2 from "../assets/Din-Slotted.jpg";
import Pic3 from "../assets/TB.jpg";
import Product from "./Product";
import "./Products.css";
const Products = () => {
  let productsArray = [
    { name: "DIN RAIL 35mm CHANNEL-1mt-plain", image: Pic1 },
    { name: "DIN RAIL 35mm CHANNEL-1mt-slotted", image: Pic2 },
    { name: "T.B. CHANNEL - 1 meter", image: Pic3 },
    { name: "GRILL PIECE", image: Logo },
    { name: "GPCOIL=0.80 SLIT COIL", image: Logo },
    { name: "DEFECTIVE EG SLIT COILS", image: Logo },
    { name: "MS FLANGE 170x127.5x0.8mm", image: Logo },
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
