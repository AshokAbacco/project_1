import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import IntegraZapier from "./IntegraZapier";


function DashIntegrations() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <Layout>
        <div>
          <div className="topnav">
            <div className="left-section">
              <h4 className="page-title">integration</h4>
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

              <div
                className="profile"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="profile-initial">K</div>
                <div className="arrow">▾</div>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item mobile-only">
                      <span>5 credits</span>{" "}
                      <span className="info-icon"> i </span>
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

          <div className="integrations-nav p-5">
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Add an integration
              </a>
              <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      All <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/zapire'>
                      Zapier
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#">
                      3rd Party
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#">
                      Official
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#">
                      Apps/Add-ons
                    </Link>
                  </li>
                 
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>

          <div className="">
            
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DashIntegrations;
