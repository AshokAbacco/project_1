import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Business Consultancy",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "💼",
    color: "#FFD93D"
  },
  {
    title: "Business Management",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "📊",
    color: "#82D9B5"
  },
  {
    title: "Business Development",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "🧠",
    color: "#AB8EFF"
  },
  {
    title: "Marketing",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "📢",
    color: "#FF7C96"
  },
  {
    title: "SEO Services",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "🔍",
    color: "#FF5B37"
  },
  {
    title: "Usability Testing",
    description: "Business is the activity of making one living making money by producing products. Simply put it is any activity or enterprise entered into for profit.",
    icon: "⚗️",
    color: "#6EBBFF"
  }
];

const Features = () => {
    
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (in ms)
        once: true      // animation happens only once
      });
    }, []);

  return (
    <div className="">
        <Navbar/>

         <section className="hero-section">
        <div className="hero-content">
          <div data-aos="zoom-in">
              <h1>Powerful Email Validation</h1>
              <p>Validate and clean your email list to boost your delivery rate and protect your sender reputation.</p>
              <a href="#validate" className="hero-btn">Start Validating</a>
          </div>
        </div>
      </section>

      {/* Email Validation Form */}
      <section id="validate" className="validate-section">
        <h2>Enter Email to Validate</h2>
        <form className="validate-form">
          <input type="email" placeholder="e.g. example@email.com" required />
          <button type="submit">Validate</button>
        </form>
      </section>

      {/* Special Services Section */}
      <section id="services">
      </section>


        <section className="services-section">
        
      <div className="services-header">
        <h2>Our special services</h2>
        <p>
          Business is the activity of making one living or making money by producing or buying and selling products.
          Simply put it is any activity or enterprise entered into for profit.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon" style={{ backgroundColor: service.color }}>
              <span>{service.icon}</span>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="services-button-wrapper">
        <button className="services-button">See Our All Services ➞</button>
      </div> */}
    </section>

    <div className=""><Footer/></div>
    </div>
    
  );
};

export default Features;
