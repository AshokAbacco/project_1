import React, { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Layout from "../Layout/Layout";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { GoFileDirectoryFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiMailAiFill } from "react-icons/ri";

function ValidateDash() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <Layout>
        <div className="topnav">
          <div className="left-section">
            <h4 className="page-title">Validate</h4>
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

        <div>
          <div className="container mt-5 ">
            <div className="individual">
              <div className="d-flex">
                <div className="individual-logo">
                  <p className="icon-mail">
                    <FaEnvelopeOpenText className="validate-icon" />
                  </p>
                </div>

                <div className="individual-text">
                  <h3>Individual Email Validation</h3>
                  <p className="individual-para">
                    Verify up to 25 emails at a time. 1 credit per email.
                  </p>
                </div>
              </div>

              <div className="individual-btn">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>

          <div className="container upload-file mt-5">
            <div className="row">
              <div className="col-md-5">
                <div className="Integration">
                  <h5>Add an Integration</h5>
                </div>
              </div>

              <div className="col-md-7">
                <div className="upload">
                  <div className="upload-1">
                    <h4>Upload your file</h4>
                    <p>Supports: CSV, TXT, XLS, or XLSX</p>
                    {/* button */}
                    <div id="firstFilter" class="filter-switch">
                      <input
                        checked=""
                        id="option1"
                        name="options"
                        type="radio"
                      />
                      <label class="option" for="option1">
                        Single
                      </label>
                      <input id="option2" name="options" type="radio" />
                      <label class="option" for="option2">
                        Multiple
                      </label>
                      <span class="background"></span>
                    </div>
                  </div>

                  <div className="file-uploding">
                    <div class="upload-icon">
                      <GoFileDirectoryFill />
                    </div>
                    <p>Drag and drop your files here</p>
                    <label for="file-upload" class="browse-link">
                      Browse Files
                    </label>
                    <input type="file" id="file-upload" hidden />
                    <span> on your computer</span>
                  </div>
                  <div className="based-files">
                    <b>Connect to your cloud based files</b>
                    <div class="cloud-integrations">
                      <div class="cloud-item">
                        <img
                          src="https://cdn-icons-png.freepik.com/256/18308/18308648.png?semt=ais_hybrid"
                          alt="Dropbox"
                        />
                        <p>Dropbox</p>
                      </div>
                      <div class="cloud-item">
                        <img
                          src="https://toppng.com/uploads/preview/google-drive-logo-vector-11573914012sfqbx9t2sp.png"
                          alt="Google Drive"
                        />
                        <p>Google Drive</p>
                      </div>
                      <div class="cloud-item">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDY-DcmCeZ-EIF4baz-7kMZoh-riOy6ueRSg&s"
                          alt="Microsoft OneDrive"
                        />
                        <p>Microsoft OneDrive</p>
                      </div>
                      <div class="cloud-item">
                        <img
                          src="https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Images.png"
                          alt="Amazon S3"
                        />
                        <p>Amazon S3</p>
                      </div>
                      <div class="cloud-item">
                        <img
                          src="https://www.pngkey.com/png/detail/671-6712251_sftp-server-on-the-mac-app-store.png"
                          alt="SFTP/FTP"
                        />
                        <p>SFTP/FTP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5 steup">
            <div className="row">
              <div className="col-md-6 steup1">
                <div className="d-flex">
                  <div className="individual-logo">
                    <p className="icon-mail">
                      <RiMailAiFill className="validate-icon" />
                    </p>
                  </div>

                  <div className="individual-text">
                    <h5>Setup Email Validation Rules</h5>
                    <Link className="individual-para">Allow or block specific emails, email domains, tld or mx records. ›                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-md-5 steup1">
                 <div className="d-flex">
                  <div className="individual-logo">
                    <p className="icon-mail">
                      <FaEnvelopeOpenText className="validate-icon" />
                    </p>
                  </div>

                  <div className="individual-text">
                    <h5>Need more credits?</h5>
                    <Link className="individual-para"> Let's go  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ValidateDash;
