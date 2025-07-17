import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { FiInfo } from "react-icons/fi";

const DashPricing = () => {
  const pricingOptions = [
    { credits: 2000, price: 18 },
    { credits: 5000, price: 40 },
    { credits: 10000, price: 75 },
    { credits: 25000, price: 175 },
    { credits: 50000, price: 350 },
    { credits: 100000, price: 390 },
    { credits: 250000, price: 875 },
    { credits: 500000, price: 1500 },
    { credits: 1000000, price: 2250 },
  ];

  const [selectedCredits, setSelectedCredits] = useState(2000);
  const [selectedPrice, setSelectedPrice] = useState(18);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCreditSelect = (credits, price) => {
    setSelectedCredits(credits);
    setSelectedPrice(price);
  };

  const getPricePerCredit = () => {
    if (selectedCredits === 0) return "0.0000";
    return (selectedPrice / selectedCredits).toFixed(4);
  };

  return (
    <Layout>
      <div className="">
        <div className="topnav">
          <div className="left-section">
            <h4 className="page-title">Pricing & Plans</h4>
          </div>

          <div className="right-section">
            <div className="credits desktop-only">
              <span className="credit-amount">5 credits</span>
              <span className="info-icon">
                <FiInfo />
              </span>
            </div>

            <button className="buy-credits-btn desktop-only">Buy Credits</button>

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
                  <button className="btn btn-sm btn-primary">Buy Credits</button>
                </li>
                <li className="dropdown-item">Account</li>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-container">
        <div className="left-section">
          <h2>Email Validation & Scoring</h2>
          <p>
            1 credit is equal to 1 email validation or score. Credits never
            expire.
          </p>
          <p className="custom-credit-input">
            <span>Enter a custom Credits</span>
            <input
              type="number"
              value={selectedCredits}
              onChange={(e) => {
                const customCredits = parseInt(e.target.value);
                setSelectedCredits(customCredits);
                setSelectedPrice(
                  parseFloat((customCredits * 0.009).toFixed(2))
                );
              }}
              placeholder="Enter a custom amount"
              
            />
          </p>

          <div className="credit-selection">
            {pricingOptions.map((option) => (
              <div
                key={option.credits}
                className={`credit-option ${
                  selectedCredits === option.credits ? "selected" : ""
                }`}
                onClick={() => handleCreditSelect(option.credits, option.price)}
              >
                {option.credits.toLocaleString()} credits for ${option.price}
              </div>
            ))}
          </div>
        </div>

        <div className="right-section1">
          <div className="toggle-section1" style={{ paddingLeft: "160px" }}>
            <span>Pay-As-You-Go</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isMonthly}
                onChange={() => setIsMonthly(!isMonthly)}
              />
              <span className="slider round"></span>
            </label>
            <span>Monthly</span>
          </div>

          <div className="price-display">
            <h1>
              ${selectedPrice} <span className="per-month">/mo</span>
            </h1>
            <p>Price shown in USD</p>
            <p>${getPricePerCredit()} per credit</p>
          </div>

          <div className="subscription-box">
            <p>{selectedCredits.toLocaleString()} credits</p>
            <p>${selectedPrice}</p>
            <p>
              Your account will be charged each month until cancelled. Unused
              credits rollover each month.
            </p>
          </div>

          <button className="subscribe-button">Subscribe Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default DashPricing;
