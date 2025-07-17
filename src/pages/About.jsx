import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../components/Cardscroling.css'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function About() {

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (in ms)
        once: true      // animation happens only once
      });
    }, []);

  return (
    <div>
        <Navbar/>
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-text">
                      <div data-aos="fade-right">
                        <h6 className='text'>About</h6>
                        <h1 className='text'>Meet the Inbox Intelligence Team</h1>
                        <h5 className='text'>We're Email Junkies!</h5>
                      </div>  
                    </div>
                    <div className="col-md-6">
                      <div data-aos="fade-left">
                        <img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=544px,metadata=none/static/introabout.png" alt="" />
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="what-is">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.pinimg.com/736x/ef/54/48/ef54486c91941e0b85ca48bf9696be21.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-md-6 what-info">
                        <h4> What is Inbox Intelligence?</h4>
                        <p>
                            Inbox Intelligence is a data-driven platform that helps organizations optimize email performance through intelligent validation, deliverability tools, and real-time analytics. Our mission is to ensure your messages reach real people—not spam folders or dead inboxes.

                            With a focus on security, accuracy, and deep insights, Inbox Intelligence empowers marketing and operations teams to clean their email lists, detect risky or fake addresses, and uncover hidden patterns in engagement.

                        </p>
                        <p>                            Developed by a team of experts in email infrastructure, compliance, and data science, Inbox Intelligence goes beyond basic validation—giving you the confidence to communicate smarter, faster, and with measurable results.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="we-do">
            <div className="container">
                <img src="http://localhost:3000/images/logo-img.png.png" alt=""  />
                <h4>What we do.</h4>
                <p>
                    At Inbox Intelligence, we strive to provide effective, high-quality tools that empower users to maximize their email deliverability—ensuring their messages consistently land in the inbox, not the spam folder.

                    Our platform offers advanced email validation, list cleaning, spam trap detection, and real-time activity monitoring to help businesses maintain a healthy sender reputation and a database of only valid, engaged contacts.

                    We combine intuitive technology with deep analytics to help teams make smarter decisions, reduce bounce rates, and increase engagement. Whether you're running marketing campaigns, transactional communications, 
                    or customer retention efforts, Inbox Intelligence gives you the confidence to send with precision and purpose.            
                </p>
            </div>
        </div>

        

      <section className="services-section">
        <div className="containe ml-5 mr-5">
          <div className="row align-items-center">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h6 className="text-uppercase text-primary fw-bold">Our Services</h6>
              <h2 className="fw-bold">We Provide A Lot of Cool Services</h2>
              <p className="text-muted">
                This email verification platform provides comprehensive tools to enhance email accuracy and deliverability. Key features include validation, activity analytics, warmup services, DMARC monitoring, and server testing to optimize email performance and sender reputation.

              </p>
              <Link to="" className="btn btn-purple mt-3">Our Services</Link>
            </div>

            <div className="col-lg-9">
              <div className="row g-3">
                  <h5>Email Validation</h5>  
                <div className="col-md-4">
                  <div data-aos="flip-left">
                    <div className="service-box">
                      <div className="service-icon-1"> <img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/validation-icon.webp" alt="" /> </div>
                      <h6 className="fw-bold">Email Validation</h6>
                      <p className="text-muted small">Clean your email list fast and keep your subscribers up to date with Inbox Intlligence email validation. </p>
                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div data-aos="flip-left"> 
                    <div className="service-box">
                      <div className="service-icon-1"><img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/data-icon.webp" alt="" /></div>
                      <h6 className="fw-bold">Email Activity Data</h6>
                      <p className="text-muted small">Improve your email open rates, click rates, and overall engagement with Activity Data.</p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div data-aos="flip-left"> 
                    <div className="service-box">
                      <div className="service-icon-1"><img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/email-finder-icon.webp" alt="" /></div>
                      <h6 className="fw-bold">Email Finder</h6>
                      <p className="text-muted small">Even the all-powerful Pointing has no control about the blind texts.</p>
                    </div>
                  </div>  
                </div>
                <h5>Email Deliverability</h5>
                <div className="col-md-4">
                  <div data-aos="flip-left"> 
                    <div className="service-box">
                      <div className="service-icon-1"><img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/icon-warmup-active.png" alt="" /></div>
                      <h6 className="fw-bold">Email Warmup</h6>
                      <p className="text-muted small">Warmup can build, repair, or protect your company’s reputation by automatically getting you opens, clicks, favorites, and forwards. </p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div data-aos="flip-left"> 
                    <div className="service-box">
                      <div className="service-icon-1"><img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/drawer-icon.webp" alt="" /></div>
                      <h6 className="fw-bold">Email Server Tester Tool</h6>
                      <p className="text-muted small">Want to test your email delivery before clicking send? Take advantage of our email testing tools</p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div data-aos="flip-left"> 
                    <div className="service-box">
                      <div className="service-icon-1"><img src="https://www.zerobounce.net/cdn-cgi/image/fit=scale-down,format=auto,quality=90,width=46.5,metadata=none/static/dmarc-starter.png" alt="" /></div>
                      <h6 className="fw-bold">DMARC monitor</h6>
                      <p className="text-muted small">Protect your email domain from imposters with real-time multi-domain DMARC monitoring</p>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className="values-section">
            <div className=" values-container ">
                    {/* <div className="image-container">
                    <img src="https://estuary.dev/static/cd94e807d6ba15eb50f641dca05c2b94/84b73/1_Data_Integrity_bfc5ad0d4f.png" alt="Team member" />
                    </div>*/}
                    <div className="text-container"> 
                        <h2>What we value.</h2>

                        <div className="values-grid">
                            <div className="value-box">
                            <h3>Privacy &amp; data security</h3>
                            <p>We prioritize protecting our users’ data, ensuring robust privacy measures and uncompromising security standards.</p>
                            </div>
                            <div className="value-box">
                            <h3>Integrity</h3>
                            <p>We uphold the highest ethical standards in all of our actions, always striving to make fair and responsible decisions.</p>
                            </div>
                            <div className="value-box">
                            <h3>Accuracy</h3>
                            <p>We’re committed to providing precise and reliable email validation, ensuring our users’ results are always accurate and up-to-date.</p>
                            </div>
                            <div className="value-box">
                            <h3>Innovation</h3>
                            <p>We continuously seek innovation, developing cutting-edge solutions that are quick to market. We keep our users at the forefront of email deliverability and accurate contact management.</p>
                            </div>
                            <div className="value-box">
                            <h3>Responsiveness</h3>
                            <p>We offer exceptional 365/24/7 customer support and are dedicated to swiftly assisting our users with any issues and helping them achieve their business goals through enhanced email deliverability and accurate contact management.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className="location">
            <div className="container location-1">
                <div className="row">

                    <div className="col-md-6 location-name">
                      <div data-aos="fade-right"> 
                        <h2>Where we’re located</h2>
                        <h4>Austin, Texas</h4>
                        <p>701 Brazos St, Suite 1600 Austin, TX 78701 USA.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div data-aos="fade-left"> 
                        <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSKRMqbLsQXL7kF7YQ4AYhaOaaEw4wpCgDQDi6YpQl7FRy5KBBUu1COS0wvY_eKJ1EVNYDi4blqL-Iysc-F2L-iin1pLRkmnREauzzFXw" alt="" />
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <Footer/>
        </div>
    </div>
  )
}

export default About
