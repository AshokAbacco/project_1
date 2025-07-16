import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { FiInfo } from "react-icons/fi";
 

function DashEmail() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        </Layout>
    </div>
  )
}

export default DashEmail
