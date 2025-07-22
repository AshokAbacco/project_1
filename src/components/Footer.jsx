import React from 'react'
import { SiAmazonsimpleemailservice } from 'react-icons/si'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
          <div className="footer-1 mt-5">
          <div className="ml-5 mr-5">
            <div className="row">
                <div className="col-md-4 footer">
                <SiAmazonsimpleemailservice className="brand-icon" />
                <span className="brand-text">Inbox Intelligence</span>
                <p className="all-rights">© 2025 Mails, Inc. All rights reserved.</p>
                </div>
                <div className="col-md-2">
                  <h6>Solutions</h6>
                  <a href="">List validation</a>
                  <a href="">Integrations</a>
                  <a href="">API</a>
                </div>
                <div className="col-md-2">
                  <h6>Support</h6>
                  <a href="">Pricing</a>
                  <a href="">Documentation</a>
                  <a href="">API Status</a>
                </div>
                <div className="col-md-2">
                  <h6>Company</h6>
                  <a href="">Blog</a>
                  <a href="">Glossary</a>
                  <a href="">Compare</a>
                </div>
                <div className="col-md-2">
                  <h6>Legal</h6>
                  <Link to="">Privacy</Link>
                  <Link to="">Terms</Link>
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
