import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="home-contact">
        <p>Contact us</p>
        <h3>How can we help?</h3>
        <p className="para">
          Whether you have questions, brilliant ideas or are eager to
          collaborate on something extraordinary, we're always here to connect.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-section">
          <div className="contact-box">
            <strong>For support queries:</strong>
            <br />
            <a href="mailto:help@snov.io">help@inbox.com</a>
          </div>

          <div className="contact-box">
            <strong>For partnerships and collaboration:</strong>
            <br />
            <a href="mailto:partnerships@snov.io">partnerships@inbox.com</a>
          </div>

          <div className="contact-box">
            <strong>For data protection & legal related inquiries:</strong>
            <br />
            <a href="mailto:snovio_dpo@snov.io">inbox_dpo@inbox.com</a>
          </div>
        </div>
      </div>

        <div className=" container bottom-section">
          <div className="address-box">
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSKRMqbLsQXL7kF7YQ4AYhaOaaEw4wpCgDQDi6YpQl7FRy5KBBUu1COS0wvY_eKJ1EVNYDi4blqL-Iysc-F2L-iin1pLRkmnREauzzFXw"
              alt="Statue of Liberty"
            />
            <div>
              <strong>Address:</strong>
              <br />
              Austin, Texas
              <br />
              701 Brazos St, Suite 1600 Austin, TX 78701 USA.
              <br />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer">
                Map ↗
              </a>
            </div>
          </div>
            <div className="follow-container">
                <strong>Follow us:</strong>
                <div className="icons-0">
                    <Link to="/facebook"><FaFacebookF /></Link>
                    <Link to="/linkedin"><FaLinkedinIn /></Link>
                    <Link to="/x"><FaXTwitter /></Link>
                    <Link to="/instagram"><FaInstagram /></Link>
                    <Link to="/youtube"><FaYoutube /></Link>
                </div>
            </div>
        </div>

        <Footer/>


    </div>
  );
}

export default ContactUs;
