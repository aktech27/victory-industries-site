import "./Contact.css";
import Logo from "../assets/logo.png";
const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62156.73615491955!2d80.13590485884473!3d13.175258097997197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264cc574f76c3%3A0x7b7284d8e921ba06!2sVictory%20Industries!5e0!3m2!1sen!2sin!4v1636863726975!5m2!1sen!2sin"
            height="100%"
            width="100%"
            allowfullscreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </footer>
      <section className="trademark">
        <div></div>
        <div>&copy; 2021 victoryindustry.in</div>
        <div></div>
      </section>
    </div>
  );
};

export default Contact;
