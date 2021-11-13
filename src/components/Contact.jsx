import "./Contact.css";
import Logo from "../assets/logo.png";
const Contact = () => {
  return (
    <>
      <footer id="contact">
        <div className="contact-details">
          <address>
            <i class="fa fa-map-marker" aria-hidden="true"></i>No.8, Gandhi Main Road, Puzhal,
            Chennai - 600 066
          </address>
          <a href="tel:+919841378038">
            <i class="fa fa-phone" aria-hidden="true"></i>+91 98413 78038
          </a>
          <a href="tel:+918681054495">
            <i class="fa fa-phone" aria-hidden="true"></i>+91 86810 54495
          </a>
          <a href="mailto:victoryindustries2017@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>victoryindustries2017@gmail.com
          </a>
        </div>
        <div className="contact-logo">
          <img src={Logo} alt="Logo" />
        </div>
      </footer>
      <section className="trademark">
        <div></div>
        <div>&copy; 2021 victoryindustry.in</div>
        <div></div>
      </section>
    </>
  );
};

export default Contact;
