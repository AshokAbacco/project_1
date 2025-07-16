import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiAmazonsimpleemailservice } from "react-icons/si";

function Sidebar( {children} ) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className="toggle-btn d-md-none" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar text-white ${isOpen ? "open" : ""}`}>
        <Link className="navbar-brand d-flex align-items-center gap-2 pb-5" to="/">
          <SiAmazonsimpleemailservice className="brand-icon" />
          <span className="brand-text">Inbox Intelligence</span>
        </Link>

        <ul className="nav1">
          <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
          <li className="nav-item"><Link to="/validate" className="nav-link">Validate</Link></li>
          {/* <li className="nav-item"><Link to="/score" className="nav-link">Score</Link></li> */}
          <li className="nav-item"><Link to="/email-finder" className="nav-link">Email Finder</Link></li>
          <li className="nav-item"><Link to="/wermup" className="nav-link">Warmup</Link></li>
          <li className="nav-item"><Link to="/tools" className="nav-link">Tools</Link></li>
          <li className="nav-item"><Link to="/integrations" className="nav-link">Integrations</Link></li>
          <li className="nav-item"><Link to="/api" className="nav-link">API</Link></li>
          {/* <li className="nav-item"><Link to="/usage" className="nav-link">Usage</Link></li> */}
          <li className="nav-item"><Link to="/pricing-plan" className="nav-link">Pricing & Plans</Link></li>
        </ul>
      </div>
      
      {/* Replace hardcoded content with dynamic children */}
      <div className="dashboard-content" style={{ marginLeft: '250px', padding: '20px' }}>
        {children}
      </div>

    </div>
  );
}

export default Sidebar;