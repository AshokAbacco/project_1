import React, {useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Uploadfile from "../components/Uploadfile";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cardscroling from "../components/CardScroling";
import Usecases from "../components/Usecases";
import { FaArrowRight } from "react-icons/fa";
import Reliability from "../components/Reliability";
import Paidplans from "../components/Paidplans";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import { ThemeContext } from "./ThemeContext"; // Import the ThemeContext

function Homepage() {
  
   
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true      // animation happens only once
    });
  }, []);
    const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}>
      <Navbar />
      <div className="container home">
        <div data-aos="fade-down"> 
        <div class="row">
          
            <div className="col-md-5 home-img">
              <div>
                <img src="./images/logo-img.png.png" alt="" />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
              </div>

              <div>
                <h1>Simple, fast, and secure email validation service</h1>
              </div>

              <p>
                Email Validation API: Clean Lists, Boost Deliverability & Maximize
                ROI.Remove fake emails and spam users from your email lists.
              </p>
              <div className="home-check">
                <FaCheck color="green" size={20} /> GDPR Compliant
                <FaCheck color="green" size={20} /> 99.99% availability
              </div>

              <div className="home-btn">
                <Link to="/email-validation" className="btn d-inline-flex ">
                    Get started for free{" "}
                    <HiArrowRight size={20} className="arrow-icon ms-2" color="white" />
                </Link>
                <p>Includes 50 free credits</p>
                <img src="https://mails.so/images/illustrations/arrow.png" alt="" />
              </div>
            </div>
          
            <div className="col-md-2"></div>
           
            <div className="col-md-5 pt-5">
              <div class="home-card">
                <div className="card-header">
                  <p>deo.schmoe@gmail.com</p>
                  <button type="button" className="btn">
                    Validate{" "}
                    <HiArrowRight
                      size={20}
                      className="arrow-icon"
                      color="block"
                    />{" "}
                  </button>
                </div>
                <div className="delivary">
                  <p className="deli">Deliverable</p>
                  <div className="deli-para">
                    <h6>This address accepts email</h6>
                    <p>
                      The recipient's email server has confirmed its
                      deliverability.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="deli">Deliverable</p>
                  <h5 className="deli-para">This email address is valid</h5>

                  <div style={{marginLeft:'25px'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
                    
                      <span>0</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75</span>
                      <span>100</span>
                    
                    </div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "25%" }}
                      ></div>
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "25%" }}
                      ></div>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "25%" }}
                      ></div>
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>

                </div>
                
                <div class="card-body">
                  <Uploadfile/>
                </div>
              </div>
            </div>
           
        </div>
        </div>

        {/* social media icons */}
        <div className="">
          <SocialIcons/>
        </div>
      </div>
      
      {/* Cardscroling  */}
    
      <div className="card-scroling">
          <Cardscroling/>
      </div>

    <div data-aos="fade-up">
      <div className="Containair-fluid mails-so">
        <div className="mailso">
          <img src="./images/logo-img.png.png" alt="" /> 
          <div>
            <h4>“Inbox Intelligence delivers all we need in an email validation service: top <p>security, scalability, performance, and extensive integrations”.</p></h4>
            <p className="person-icon"> <i className="bi bi-person-circle"></i> A happy customer, probably</p>
          </div>
        </div>

        <div className="container">
          <div className="mail-container">
              
            <h2 className="mail-head">What does Inbox Intelligence exactly do?</h2>
            <p className="mail-head">tl;dr — Remove invalid recipients, block fake users and bots, prevent fraud, and help you save money.</p>

            <div className="mail-list">
              <ul className="list-unstyled">
                <li className="list-item">
                  <i className="bi bi-pencil-square icon-top"></i>
                  Format check
                </li>
                <li className="list-item">
                  <i className="bi bi-box-seam icon-top"></i>
                  Delivery check
                </li>
                <li className="list-item">
                  <i className="bi bi-person-up icon-top"></i>
                  
                  Email profiling
                </li>
                <li className="list-item">
                <i className="bi bi-shield-x icon-top"></i>
                  Blocklists
                </li>
                <li className="list-item">
                   <i className="bi bi-filetype-json icon-top"></i>
                  No-code APIs
                </li>
                <li className="list-item">
                  <i className="bi bi-envelope-plus icon-top"></i>
                  Mailing lists
                </li>
              </ul>
            </div>

          </div>


        </div>

      </div>
    </div>

      <div className="container load">
          <div className="text">
              <h5>Place us after your sign up forms and landing pages.</h5>
              <h5>We'll make sure you only get real users.</h5>
          </div>
          <div className="text-2">
              <p> 2-3% of users make spelling mistakes</p>
              <p> 3-4% make up their address on signup</p>
              <p> ~2% are spam signups with fake addresses</p>
              <p> ~1% use temporary or catch-all addresses</p>
          </div>
          
      </div>

      {/* usecases */}
      <div data-aos="fade-up" data-aos-duration="1000">
       <div className=""> <Usecases/> </div>
      </div>
      {/*  */}
      <div className="container-fluid new-mails">
        <img src="./images/logo-img.png.png" alt="" /> 
        <h5>“Inbox Intelligence delivers all we need in an email validation service: top </h5>
        <h5>security, scalability, performance, and extensive integrations”.</h5>
        <p className="person-icon"> <i className="bi bi-person-circle"></i> A happy customer, probably</p>
      </div>

      {/* intigration */}
    <div data-aos="zoom-in"> 
      <div className="container intigration">
        <div className="row">
            <div className="col-md-5 logo-1"><img src="https://www.audox.com/zapier/wp-content/uploads/sites/12/2022/11/Screenshot-2022-11-26-at-12.57.39.png" alt="" className="w-100" /></div>
            <div className="col-md-7">
              
              <div className="interg-para">
                <p>Integrations</p>
                <h5>No-code integrations with your favourite tools</h5>
                <p>We've built simple integrations with the most famous no-code tools. Start building today with🧡 <b>Zapier</b> or 💜 <b>Make</b>.</p>
                
                <button type="button" className="btn"><a href="">Get started <FaArrowRight className="arrow-icon" /></a></button>
              </div>
              
            </div>

        </div>
      </div>
    </div> 
      {/*Reliability  */}
      <div className="">
        <Reliability/>
      </div>

      {/* Paidplans */}

       <div className="">
        <Paidplans/>
       </div>

       {/* FAQ */}

       <div className="">
           <Faq/>
       </div>

      
     <div className="">
      <Footer/>
     </div>
    
    </div>
  );
}

export default Homepage;


