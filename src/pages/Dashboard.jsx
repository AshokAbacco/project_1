import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Layout from '../Layout/Layout';
import { FaEnvelopeOpenText } from 'react-icons/fa';   // ✅ Add this
import { FiInfo } from 'react-icons/fi';                // Already present
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiInbox } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FiActivity } from 'react-icons/fi';
import { FiBarChart2 } from 'react-icons/fi';
import DashChar from '../components/DashChar';
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
 

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Layout>
      {/* Top Navigation Bar */}

      <div className="topnav">
        <div className="left-section">
          <h4 className="page-title">Dashboard</h4>
        </div>

        <div className="right-section">
          <div className="credits desktop-only">
            <span className="credit-amount">5 credits</span>
            <span className="info-icon"><FiInfo /></span>
          </div>

          <button className="buy-credits-btn desktop-only">Buy Credits</button>

           <div className="profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className="profile-initial">K</div>
              <div className="arrow">▾</div>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item mobile-only">
                    <span>5 credits</span> <span className="info-icon"> i </span>
                  </div>
                  <div className="dropdown-item mobile-only">
                    <button className="buy-credits-btn">Buy Credits</button>
                  </div>
                  <div className="dropdown-item">Account</div>
                  <div className="dropdown-item">Settings</div>
                  <div className="dropdown-item">Logout</div>
                </div>
              )}
            </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dash-home">
        <h4>Welcome Back</h4>

        <div className="email-dash">
          <div className="row">
            <div className="col-md-6">
              {/* Validate Card */}
              <div className="validate-card">
                <div className="validate-left">
                  <div className="validate-header">
                    <p className='icon-mail'><FaEnvelopeOpenText className="validate-icon" /></p>
                    <div className='validate-title-1'>
                      <p className="validate-title">
                        Validate <FiInfo className="info-icon" />
                      </p>
                      <p><Link to="/results" className="view-results">View Results</Link></p>
                    </div>
                  </div>

                  <label className="section-label">SINGLE EMAIL VALIDATION</label>
                  <div className="validate-input-group">
                    <input type="email" placeholder="email@example.com" className="email-input" required/>
                    <Link to="#" className="go-button">Go</Link>  
                  </div>

                  <div className="or-section">
                      <span>or validate an entire list</span>
                      <button className="validate-list-btn" > <Link to="/validate"  style={{ color: '#fff' }} className='validat-link'>Validate New List </Link> </button>
                  </div>
                </div>

                <div className="validate-right">
                  <p className="validation-img"> <HiOutlineMailOpen/> </p>
                    
                  <p className="validation-label">TOTAL VALIDATIONS</p>
                  <h2 className="validation-count">0</h2>
                </div>
              </div>
            </div>

            {/* Placeholder for other cards or future content */}
            <div className="col-md-3">
                <div class="custom-card-body">

                   <div className="validate-header">
                    <p className='icon-mail'><FaEnvelopeOpenText className="validate-icon" /></p>
                    <div className='validate-title-1'>
                      <p className="validate-title">
                        Score <FiInfo className="info-icon" />
                      </p>
                      <p><Link to="/results" className="view-results">View Results</Link></p>
                    </div>

                  </div>
                
                  <p class="custom-card-text">See how active and valuable your list is. Score your catch-all email addresses now.</p>
                  <Link to="/score" className="btn score-btn" role="button">Score New List</Link>
                </div>

            </div>
            <div className="col-md-3">
              <div class="custom-card-body">

                   <div className="validate-header">
                    <p className='icon-mail'><FiInbox  className="validate-icon" /></p>
                    <div className='validate-title-1'>
                      <p className="validate-title">
                        Inbox & Server Test <FiInfo className="info-icon"/>
                      </p>
                      <p><Link to="/tools" className="view-results">View Inbox Results</Link></p>
                    </div>

                  </div>
                
                  <p class="custom-card-text">Test to make sure your emails reach the inbox and that your mail server is set up correctly.</p>
                  <Link to="/tools" className="btn score-btn" role="button"> New List</Link>
                
                </div>
            </div>

          </div>
           
          <div className="email-dash-1">

            <div className="row ">
              <div className="col-md-3">
                <div class="custom-card-body">

                  <div className="validate-header">

                    <p className='icon-mail'><FiActivity className="validate-icon" /></p>
                    <div className='validate-title-1'>
                      <p className="validate-title">
                        Blacklist Monitor <FiInfo className="info-icon" />
                      </p>
                      <p><Link to="/results" className="view-results">SEE ALL</Link></p>
                    </div>

                  </div>
              
                  <p class="custom-card-text"> <FiInfo className="info-icon" /> You don't have a monitor set up yet.</p>
                  <Link to="" className="btn score-btn" role="button">+ Add New Monitor</Link>
                </div>

              </div>
              <div className="col-md-3">
                  <div class="custom-card-body">

                    <div className="validate-header">
                      <p className='icon-mail'><FiBarChart2 className="validate-icon" /></p>
                      <div className='validate-title-1'>
                        <p className="validate-title">
                          Quick Stats <FiInfo className="info-icon" />
                        </p>
                        <p><Link to="/results" className="view-results">View Results</Link></p>
                      </div>

                    </div>
                  
                    <p class="custom-card-text"><FiInfo className="info-icon" /> We've removed 0 invalids from your contacts</p>
                    <p class="custom-card-text"><FiInfo className="info-icon" /> We've removed 0 complainers, spamtraps and known abusers</p>
                    <p class="custom-card-text"><IoMdCheckmarkCircleOutline className="text-success" /> We've fixed 0 typos </p>
                  </div>
              </div>
              <div className="col-md-3">
                  <div class="custom-card-body">

                  <div className="validate-header">
                  <p className='icon-mail'><BsPersonBoundingBox className="validate-icon" /> </p>
                  <div className='validate-title-1'>
                    <p className="validate-title">
                      Email Finder <FiInfo className="info-icon" />
                    </p>
                    <p><Link to="/results" className="view-results">View Results</Link></p>
                  </div>

              </div>
              
                <p class="custom-card-text"> Find a verified email address based on their name and company domain. Use our Bulk Email Finder to find multiple emails.</p>
                
                <div className="">
                  <div class="form-group">
                    <label for="">Full Name</label>
                    <input type="name" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                  </div>
                  <div class="form-group">
                    <label for="">Domain Name</label>
                    <input type="name" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                  </div>
                  <button type="submit" className="btn text-light  " style={{ backgroundColor: '#66001f' }}>Find Email</button>
                
                </div>

                  
              </div>
              </div>
              <div className="col-md-3">
                    <div class="custom-card-body">

                  <div className="validate-header">
                  <p className='icon-mail'><MdAlternateEmail className="validate-icon" /></p>
                  <div className='validate-title-1'>
                    <p className="validate-title">
                      Domain Search <FiInfo className="info-icon" />
                    </p>
                    <p><Link to="/results" className="view-results">View Results</Link></p>
                  </div>

                </div>
              
                <p class="custom-card-text">See how active and valuable your list is. Score your catch-all email addresses now.</p>
                <Link to="" className="btn score-btn" role="button">Score New List</Link>
              </div>
              </div>
            </div>
          </div>
          
          <div className="email-dash-2 mt-5">
            <div className="row">
              <div className="col-md-3">
                  <div class="custom-card-body">
                      <div className="validate-header">
                        <p className='icon-mail'><BsShieldCheck className="validate-icon" /></p>
                        <div className='validate-title-1'>
                          <p className="validate-title">
                            DMARC Monitor <FiInfo className="info-icon" />
                          </p>
                          <p><Link to="/results" className="view-results">See All | Upgrade now</Link></p>
                      </div>
                    </div>
                     <h5>No domains added, yet.</h5>
                    <p class="custom-card-text">Protect your domain and get insights into your email authentication.</p>
                    <Link to="" className="btn score-btn " role="button">Get Started</Link>
                  </div>
              </div>
              <div className="col-md-3">
                  <div class="custom-card-body">
                      <div className="validate-header">
                        <p className='icon-mail'><AiOutlineFire className="validate-icon" /></p>
                        <div className='validate-title-1'>
                          <p className="validate-title">
                            Warmup <FiInfo className="info-icon" />
                          </p>
                          <p><Link to="/results" className="view-results">See All | Upgrade now</Link></p>
                      </div>
                    </div>

                     <h5>No domains added, yet.</h5>
                    <p class="custom-card-text">Email Warmup helps boost your email sender reputation.</p>
                    <Link to="" className="btn score-btn warmup" role="button"> Get Started</Link>
                  </div>
              </div>
              <div className="col-md-6">
                 <h2>Usage</h2>
                 <DashChar/>
              </div>

            </div>
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
