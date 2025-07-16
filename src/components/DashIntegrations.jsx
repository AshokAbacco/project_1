import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Integration } from "../data/Integration";
import { FiInfo } from "react-icons/fi";

const categories = ["All", "Marketing", "Zapier", "Automation", "3rd Party"];

function DashIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // 🆕 used for actual search
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 🔍 Filter only when search button is clicked
  const filteredIntegrations = Integration.filter((integration) => {
    const matchesCategory =
      selectedCategory === "All" || integration.category === selectedCategory;

    const matchesSearch = integration.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <Layout>
      {/* Topbar */}
      <div className="topnav">
        <div className="left-section">
          <h4 className="page-title">Integrations</h4>
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

      {/* Integration header with tabs + search */}
      <div className="topnav integration-nav">
        <div className="left-section">
          <h4 className="page-title">Add an integration</h4>

          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`tab-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="right-section">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="container mt-5 integration-section">
        <div className="integration-grid d-flex">
          {filteredIntegrations.map((item, index) => (
            <div className="integration-card" key={index}>
              <img
                src={item.logo}
                alt={item.name}
                className="integration-logo"
              />
              <div className="integration-name">{item.name}</div>
              <span className="integration-label">{item.label}</span>
              <span className="integration-category">{item.category}</span>
            </div>
          ))}
          {filteredIntegrations.length === 0 && (
            <p style={{ padding: "20px", color: "#888" }}>
              No integrations found.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default DashIntegrations;
