import React, {useState} from "react";
import Layout from "../Layout/Layout";
import { FiInfo } from "react-icons/fi";

function DashWarmup() {
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

        <div class="warmup-dashboard-container">
          <p class="warmup-dashboard-description">
            Email Warmup helps boost your email sender reputation. Gradually
            introduce new subscribers to your email content, automate your
            sending pace, optimize your engagement, and stay out of spam.{" "}
            <a href="#">Learn more about Warmup.</a>
          </p>

          <div class="warmup-alert-box">
            You have no Warmup Accounts. <a href="#">Upgrade now</a> to get
            started!
          </div>

          <div class="warmup-stats-card">
            <div class="warmup-stats-header">
              <div class="warmup-stats-title">
                <span class="warmup-icon">📥</span>
                <span>Inbox Placement Statistics</span>
              </div>
              <div class="warmup-date-filters">
                <input
                  type="date"
                  class="warmup-date-input"
                  value="2025-06-17"
                />
                <span>-</span>
                <input
                  type="date"
                  class="warmup-date-input"
                  value="2025-07-17"
                />
                <button class="warmup-apply-btn">Apply</button>
              </div>
              <div class="warmup-stat-counts">
                <span>
                  <strong>INBOX</strong> 0
                </span>
                <span>
                  <strong>PROMOTIONS</strong> 0
                </span>
                <span>
                  <strong>SPAM</strong> 0
                </span>
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
                <input
                  type="text"
                  class="warmup-search-input"
                  placeholder="Search accounts"
                />
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

            <div class="warmup-empty-state">You currently have no accounts</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DashWarmup;
