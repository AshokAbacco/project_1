import React, {useEffect} from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Paidplans from '../components/Paidplans';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ListValidation() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true      // animation happens only once
    });
  }, []);
  return (
    <div>
      <Navbar/>
        <section className="list-validation-section">
            <div data-aos="zoom-in-down">
                <div className="container">
                    <p className="tagline"> <i className="bi bi-card-checklist"></i> List verifications</p>
                    <h1>Bulk Contact Data Validation</h1>
                    <p className="subtext">
                    Protect your sender reputation keeping your lists free from spam traps, bounces, disposable and catch-all emails.
                    </p>

                    <Link to="/email-validation" className="cta-button">Try it free →</Link>
                    <p className="no-credit">No credit card required</p>

                    <div className="integration-line" />

                    <p className="integration-text">Integrates with your favorite tools</p>
                    <div className="tools-logos">
                        <img src="https://mails.so/images/integrations.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <div className="container campaigns">

            <div className="campaigns-1">
                <h6>1</h6>
                <h3>Upload your list from any source</h3>
                <p>If you're running a newsletter, an e-commerce, a SaaS, or marketing campaigns, Inbox Intelligence is for you.</p>
            </div>
            <div className="compaigns-2">

                <div class="card-campa">
                    <div class="card-body">
                        <h4 class="card-title">Upload file</h4>
                        <p class="card-text">Validate lists uploading CSV, Excel, or plain text files</p>
                    </div>
                    <img class="card-img-top" src="https://www.kindpng.com/picc/m/750-7505563_csv-or-excel-icon-png-download-excel-csv.png" alt=""/>
                </div>

                <div class="card-campa">
                    <div class="card-body">
                        <h4 class="card-title">Import Data</h4>
                        <p class="card-text">Quickly import data from supported formats including Excel and CSV</p>
                    </div>
                    <img class="card-img-top" src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt=""/>
                </div>

                <div class="card-campa">
                    <div class="card-body">
                        <h4 class="card-title">Check File</h4>
                        <p class="card-text">Ensure your file is formatted correctly before uploading</p>
                    </div>
                    <img class="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" alt=""/>
                </div>
            </div>
        </div>
         {/*  */}

        <div className=" container  email-list ">
            <div className="row ">
                 
                <div className="col-md-6 email-data">
                    <h6>2</h6>
                    <h3>Understand your email list results</h3>
                    <p>We give you insights and statistics about your email list, so you can make better decisions. 
                       You will also be able to inspect the results, see the reason some addresses are invalid, and download the good ones.
                    </p>
                    <button class="start-btn">
                        Start for free →
                    </button>
                </div>
                <div className="col-md-6">
                    <img src="https://mails.so/images/illustrations/result-example.png" alt=""  />
                </div>
                
            </div>
        </div>

       <section className="features-section">
            <div className="features-header">
            
                <h2>What else is included for your business' lists</h2>
                <p>
                If you're running a newsletter, an e-commerce, a SaaS, or marketing
                campaigns, Inbox Intelligence is for you.
                </p>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                <p className="feature-title">Support</p>
                <h3>
                    Human support always available to help you with everything you need
                </h3>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3WyR33TKORjHUHHQg-DWjGLJgE5DOy2Cc8nWhesUHjcJ0Qdw"
                    alt="Support Icon"
                />
                </div>

                <div className="feature-card">
                <p className="feature-title">Pricing</p>
                <h3>
                    The most affordable pricing in the market, with no hidden fees
                </h3>
                <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0v5EBi-RJ-O45aHR_5SLXiVe2Fr193JkHA97Wu5BrXI1CucnB"
                    alt="Pricing Icon"
                />
                </div>

                <div className="feature-card">
                <p className="feature-title">Reliability</p>
                <h3>
                    Reliable service you can trust, with a 99.9% uptime record
                </h3>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wsG1IFBC1KdehDvX9TZvMTO7O6dgr0Y6XcERYYFknnH_1Bw"
                    alt="Uptime Icon"
                />
                </div>
            </div>
        </section>

        <div className="">
            <Paidplans/>
        </div>
         
         <div className="">
            <Footer/>
         </div>




    </div>
  )
}

export default ListValidation;
