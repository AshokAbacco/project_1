import React, { useState } from "react";import Layout from "../Layout/Layout";
import { FiInfo } from "react-icons/fi";
import ApiValidationCards from './ApiValidationCards';
function DashbordApi() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <Layout>
        <div className="topnav">
                  <div className="left-section">
                    <h4 className="page-title">API</h4>
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

        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
          <h5>API Keys</h5>
            <div class="api-main">
              <div class="api-top">
                <div class="top-info"><strong>0 keys selected</strong> › The Master key cannot be deleted</div>
                <button class="create-btn">Create a new API Key</button>
              </div>

              <table class="api-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>API Key Name</th>
                    <th>API Key</th>
                    <th>Whitelisted IP(s)</th>
                    <th>Status</th>
                    <th>Last Used</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>Master Key</td>
                    <td>
                      <div class="api-key">
                        <span class="api-key-eye">&#128065;</span>
                        <span class="api-key-text">....................eec64</span>
                        <span class="refresh-icon">&#10227;</span>
                      </div>
                    </td>
                    <td>-</td>
                    <td><span class="status-dot"></span></td>
                    <td>-</td>
                    <td><span class="edit-icon">&#9998;</span></td>
                  </tr>
                </tbody>
              </table>

              <div class="footer-note">*Never share your API Keys with others</div>
            </div>
            
          <h5 style={{ marginTop: "40px" }}>
            Getting started with Validation API's
          </h5>
          <ApiValidationCards />
        </div>
      </Layout>
    </div>
  );
}

export default DashbordApi;
