import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { RiMailAiFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ValidEmailveri from "./ValidEmailveri";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import EmailPreview from "./EmailPreview";
 

function ValidateDash() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [categorized, setCategorized] = useState({
    valid: [],
    invalid: [],
    risky: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/emails")
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  const handleDownload = (item) => {
    const workbook = XLSX.utils.book_new();
    const allEmails = [
      ...item.categories.valid.map((emailObj) => ({
        Email: emailObj.Email,
        Status: "Valid",
      })),
      ...item.categories.invalid.map((emailObj) => ({
        Email: emailObj.Email,
        Status: "Invalid",
      })),
      ...item.categories.risky.map((emailObj) => ({
        Email: emailObj.Email,
        Status: "Risky",
      })),
    ];

 
  

    const worksheet = XLSX.utils.json_to_sheet(allEmails);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });
    const buffer = new ArrayBuffer(excelBuffer.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < excelBuffer.length; i++) {
      view[i] = excelBuffer.charCodeAt(i) & 0xff;
    }

    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      `${item.filename}`
    );
  };
   const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/emails/${id}`);
      setHistory((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Failed to delete the file.");
    }
  };

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

        <div className="container mt-5">
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
              <p style={{ fontSize: "14px", color: "#666" }}>
                <strong>Note:</strong> History will be available for only 30
                days.
              </p>
              <div className="Integration">
                <h5>Conpaigne List</h5>
                {history.length === 0 ? (
                  <p>No validation history found.</p>
                ) : (
                  <ul className="list-group">
                    {history.map((item) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={item._id}
                        >
                        <div>
                          <strong>{item.filename}</strong>
                          <br />
                          <small>
                            Uploaded: {new Date(item.createdAt).toLocaleDateString()}
                          </small>
                        </div>
                        <div>
                          <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => handleDownload(item)}
                          >
                            Download Excel
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                        </li>

                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-md-7">
              <div className="upload">
                <div className="upload-1">
                  <h4>Upload your file</h4>
                  <p>Supports: CSV, TXT, XLS, or XLSX</p>
                </div>
                <div className="file-uploding">
                  <ValidEmailveri
                    refreshHistory={() => {
                      axios
                        .get("http://localhost:8000/api/emails")
                        .then((res) => setHistory(res.data));
                    }}
                    setCategorized={setCategorized}
                  />
                </div>
              </div>

              {/*  */}
              <div className="cloud-container-1">

                <h2>Connect to your cloud based files</h2>
                  <div class="cloud-container">
                    <div class="cloud-box">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYggbKsIqBHqffY7Um1ibBY7sg80wRgmqQw&s" alt="Dropbox"/>
                      <p>Dropbox</p>
                    </div>
                    <div class="cloud-box">
                      <img src="https://sm.pcmag.com/t/pcmag_uk/review/g/google-dri/google-drive-for-business_vkgn.1920.png" alt="Google Drive"/>
                      <p>Google Drive</p>
                    </div>
                    <div class="cloud-box">
                      <img src="https://download.logo.wine/logo/OneDrive/OneDrive-Logo.wine.png" alt="OneDrive"/>
                      <p>Microsoft OneDrive</p>
                    </div>
                    <div class="cloud-box">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOClLA3ebJed5yBNcs0RADML0Bwp9P-oZJYVxZe_SGOISewjSpm1nR8hwVmMpqf89fn0&usqp=CAU" alt="Amazon S3"/>
                      <p>Amazon S3</p>
                    </div>
                    <div class="cloud-box">
                      <img src="https://image.pngaaa.com/866/5224866-middle.png" alt="SFTP/FTP" className="w-100"/>
                      <p>SFTP/FTP</p>
                    </div>
                  </div>
              </div>
              <EmailPreview categorized={categorized} />
              {/*  */}
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
                  <Link className="individual-para">
                    Allow or block specific emails, domains, etc.
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-md-5 steup1">
              <div className="d-flex">
                <div className="individual-logo">
                  <p className="icon-mail">
                    <IoMdCheckmarkCircleOutline className="validate-icon" />
                  </p>
                </div>
                <div className="individual-text">
                  <h5>Need more credits?</h5>
                  <Link className="individual-para">Let's go</Link>
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
