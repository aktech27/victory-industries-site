import Logo from "../assets/owner.jpg";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="info-container">
        Victory Industries - established in the year 2000, we are leading manufacturer in Electrical
        and Panel Board Accessories.Our products are shipped to the customers based on their
        requirments and satisfaction .Our main focus is to provide high quality products to our
        customers.
      </div>
      <div className="dp-container">
        <img src={Logo} alt="DP" />
      </div>
    </section>
  );
};

export default About;
