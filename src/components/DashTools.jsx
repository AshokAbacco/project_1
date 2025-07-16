import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaServer } from "react-icons/fa";
import '../pages/Tools.css';
import { IoFileTray } from "react-icons/io5";

function DashTools() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox Placement Test");
  const renderTabContent = () => {
    switch (activeTab) {
      case "Inbox Placement Test":
        return <div>
           <main class="inbox-test-wrapper" >
              <p class="description">
                The Inbox Placement Test is used to check if your emails / newsletters will make it to your recipient’s inbox.
                This test will allow you to send an email to different mailbox providers around the world and quickly check to
                see the placement of that email. <a href="#">Learn more about Inbox Placement Testing</a>.
              </p>

              <div class="upgrade-notice">
                You have no Inbox Tests. <a href="#">Upgrade now</a> to get started!
              </div>

              <div class="test-section">
                <div class="test-icon">
                  <span class="icon"><IoFileTray /></span>
                </div>
                <div class="test-form">
                  <label>
                    <span class="label">Test Name</span>
                    <input type="text" placeholder="Enter test name" />
                  </label>

                  <label>
                    <span class="label">Mailbox Providers</span>
                    <select>
                      <option>28 seed(s) selected</option>
                    </select>
                  </label>

                  <button class="upgrade-btn">Upgrade now</button>
                </div>
              </div>

              <section class="results-table">
                <h3>Results</h3>
                <table>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>Test Name</th>
                      <th>Created By</th>
                      <th>Status</th>
                      <th>Test Code & Emails</th>
                      <th>Inbox</th>
                      <th>Other <span class="info-icon">i</span></th>
                      <th>Spam</th>
                      <th>Missing</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="no-tests">
                      <td colspan="10">You currently have no tests</td>
                    </tr>
                  </tbody>
                </table>
                <p class="note">*All tests are deleted automatically after 30 days</p>
              </section>

        </main>  
           </div>;
      case "Email Server Test":
        return <div>    
          
              <div className="email-server-test-container">
                <div className="header">
                  <h4>The Email Server Testing Platform</h4>
                  <p>
                    The Email Server Testing Platform analyzes your email headers, according to best practices set by mailbox
                    providers, to ensure that your mail server is setup and configured correctly. <a href="#">Learn more about Email Server Testing.</a>
                  </p>
                </div>

                 <div className="Server-Test">
                  <span><FaServer /></span>
                  <strong>Email Server Test</strong>
                  <p>Send an email to the following address from the mail server that you want to test:</p>
                  <input type="search" name="" placeholder="emailtester+tmBX9HPUS9iB41" id="" />
                  <button className="btn">Upgrade now</button>
                 </div>

                <div className="results-section">
                  <h3>Results</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Warnings</th>
                        <th>Criticals</th>
                        <th>View Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" className="no-records">
                          No records to display.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="note">
                    *All tests are deleted automatically after 30 days
                  </p>
                </div>
              </div>
          </div>;

      case "Blacklist Monitor":
        return <div>This is the Blacklist Monitor content.</div>;
      case "DMARC Monitor":
        return <div> 
          <div class="email-monitor-container">
              <p class="email-monitor-description">
                DMARC Monitor protects your domain security. Prevent spammers from using your domain to send spoofing emails without your permission. Set up alerts and get performance statistics for each domain you configure. <a href="#">Learn more about DMARC.</a>
              </p>

              <div class="email-monitor-banner">
                You have no DMARC Monitor Domains. <a href="#">Upgrade now</a> to get started!
              </div>

              <div class="email-monitor-card">
                <div class="email-monitor-card-header">
                  <h3 class="email-monitor-title">Domains</h3>
                  <div class="email-monitor-actions">
                    <input type="text" class="email-monitor-search" placeholder="Search domains" />
                    <button class="email-monitor-upgrade-btn">Upgrade now</button>
                  </div>
                </div>
                <hr class="email-monitor-divider" />
                <p class="email-monitor-empty">No results available</p>
              </div>
            </div>

        </div>;
      case "Warmup":
        return <div>
          <div class="warmup-dashboard-container">
              <p class="warmup-dashboard-description">
                Email Warmup helps boost your email sender reputation. Gradually introduce new subscribers to your email content, automate your sending pace, optimize your engagement, and stay out of spam. <a href="#">Learn more about Warmup.</a>
              </p>

              <div class="warmup-alert-box">
                You have no Warmup Accounts. <a href="#">Upgrade now</a> to get started!
              </div>

             
              <div class="warmup-stats-card">
                <div class="warmup-stats-header">
                  <div class="warmup-stats-title">
                    <span class="warmup-icon">📥</span>
                    <span>Inbox Placement Statistics</span>
                  </div>
                  <div class="warmup-date-filters">
                    <input type="date" class="warmup-date-input" value="2025-06-17" />
                    <span>-</span>
                    <input type="date" class="warmup-date-input" value="2025-07-17" />
                    <button class="warmup-apply-btn">Apply</button>
                  </div>
                  <div class="warmup-stat-counts">
                    <span><strong>INBOX</strong> 0</span>
                    <span><strong>PROMOTIONS</strong> 0</span>
                    <span><strong>SPAM</strong> 0</span>
                  </div>
                </div>
              </div>

              
              <div class="warmup-accounts-card">
                <div class="warmup-accounts-header">
                  <div>
                    <h3 class="warmup-accounts-title">Warmup Accounts</h3>
                    <p class="warmup-accounts-subtext">0 accounts selected</p>
                  </div>
                  <div class="warmup-accounts-controls">
                    <input type="text" class="warmup-search-input" placeholder="Search accounts" />
                    <button class="warmup-upgrade-btn">Upgrade now</button>
                  </div>
                </div>

                <table class="warmup-accounts-table">
                  <thead>
                    <tr>
                      <th>Account</th>
                      <th>Type</th>
                      <th>Inbox Score Overall</th>
                      <th>Emails Processed Today</th>
                      <th>Today's Inbox Emails</th>
                      <th>Today's SPAM/Promo</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>

                <div class="warmup-empty-state">
                  You currently have no accounts
                </div>
              </div>
            </div>

        </div>;

      case "Email Finder":
        return <div> 
          <div class="emailfinder-container">
              <p class="emailfinder-description">
                Email Finder allows you to search for new business email addresses using our proprietary technologies. Find a verified email address based on their name and company domain. <a href="#">Learn more about Email Finder.</a>
              </p>

              <div class="emailfinder-tab-info">
                You have used <strong>1 of 1 Email Finder / Domain Searches</strong>. Need more? <a href="#">Upgrade now</a>
              </div>

            
              <div class="emailfinder-card">
                <p class="emailfinder-subtitle">Find a verified email address based on their name and company domain.</p>

                <div class="emailfinder-input-row">
                  <input type="text" class="emailfinder-name-input" placeholder="John Smith" />
                  <span class="emailfinder-at-symbol">@</span>
                  <input type="text" class="emailfinder-company-input" placeholder="company.com or company name" />
                  <button class="emailfinder-search-btn">Find Emails</button>
                </div>
              </div>

            
              <div class="bulkfinder-section">
                <div class="bulkfinder-header">
                  <div>
                    <h3 class="bulkfinder-title">Bulk Email Finder</h3>
                    <p class="bulkfinder-subtext">0 files selected</p>
                  </div>
                  <div class="bulkfinder-actions">
                    <a href="#" class="bulkfinder-api-doc">API Documentation</a>
                    <button class="bulkfinder-new-btn">New Bulk Search</button>
                  </div>
                </div>

                <div class="bulkfinder-toolbar">
                  <label class="bulkfinder-toggle">
                    <input type="checkbox" />
                    <span>View all files</span>
                  </label>
                  <input type="search" class="bulkfinder-search" placeholder="Search lists" />
                </div>

                <table class="bulkfinder-table">
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>File Name</th>
                      <th>Emails</th>
                      <th>Results</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>

                <div class="bulkfinder-empty">
                  <strong>No bulk task, yet.</strong>
                  <p>Find email addresses at any company.</p>
                </div>
              </div>
            </div>

        </div>;
      default:
    
    }
  };
  return (
    <div>
      <Layout>
        <div className="topnav">
          <div className="left-section">
            <h4 className="page-title">Tools Dashboard</h4>
          </div>

          <div className="right-section">
            <div className="credits desktop-only">
              <span className="credit-amount">5 credits</span>
              <span className="info-icon">
                <FiInfo />
              </span>
            </div>

            <button className="buy-credits-btn desktop-only">
              Buy Credits
            </button>

            <div className="dropdown">
              <div
                className="profile dropdown-toggle d-flex align-items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                data-bs-toggle="dropdown"
                aria-expanded={isDropdownOpen}
              >
                <div className="profile-initial">K</div>
              </div>

              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                style={{ right: 0, left: "auto" }}
              >
                <li className="dropdown-item mobile-only">
                  <span>5 credits</span> <span className="info-icon"> i </span>
                </li>
                <li className="dropdown-item mobile-only">
                  <button className="btn btn-sm btn-primary">
                    Buy Credits
                  </button>
                </li>
                <li className="dropdown-item">Account</li>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item">Logout</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tootls-nav">
          <nav className="tabs">
            {[
              "Inbox Placement Test",
              "Email Server Test",
              "DMARC Monitor",
              "Warmup",
              "Email Finder",
            ].map((tab) => (
              <span
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
                style={{ cursor: "pointer", marginRight: "20px" }}
              >
                {tab}
              </span>
            ))}
          </nav>

          <div className="tab-content">{renderTabContent()}</div>
        </div>
        
        {/* <main class="inbox-test-wrapper" >
              <p class="description">
                The Inbox Placement Test is used to check if your emails / newsletters will make it to your recipient’s inbox.
                This test will allow you to send an email to different mailbox providers around the world and quickly check to
                see the placement of that email. <a href="#">Learn more about Inbox Placement Testing</a>.
              </p>

              <div class="upgrade-notice">
                You have no Inbox Tests. <a href="#">Upgrade now</a> to get started!
              </div>

              <div class="test-section">
                <div class="test-icon">
                  <span class="icon"><IoFileTray /></span>
                </div>
                <div class="test-form">
                  <label>
                    <span class="label">Test Name</span>
                    <input type="text" placeholder="Enter test name" />
                  </label>

                  <label>
                    <span class="label">Mailbox Providers</span>
                    <select>
                      <option>28 seed(s) selected</option>
                    </select>
                  </label>

                  <button class="upgrade-btn">Upgrade now</button>
                </div>
              </div>

              <section class="results-table">
                <h3>Results</h3>
                <table>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>Test Name</th>
                      <th>Created By</th>
                      <th>Status</th>
                      <th>Test Code & Emails</th>
                      <th>Inbox</th>
                      <th>Other <span class="info-icon">i</span></th>
                      <th>Spam</th>
                      <th>Missing</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="no-tests">
                      <td colspan="10">You currently have no tests</td>
                    </tr>
                  </tbody>
                </table>
                <p class="note">*All tests are deleted automatically after 30 days</p>
              </section>

        </main>  */}

      </Layout>
    </div>
  );
}

export default DashTools;
