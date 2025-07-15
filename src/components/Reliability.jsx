import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
 

const services = [
  { name: 'mails.so', uptime: '100.00%', filled: 30 },
  { name: 'API', uptime: '99.993%', filled: 27 },
];

const Reliability = () => {
  return (
    <div className="reliability-container ml-5 mr-5">
      <div className="container reliability-left">
        <p className="label">Reliability</p>
        <h2>Up and running now, then, and always</h2>
        <p className="description">
          We know how important it is to have a reliable service. 
          <p>That's why we've built a rock solid service
          that has been running with a 99.9% uptime consistently.</p>
        </p>
        <button className="cta-button">
          Start for free <FaArrowRight className="arrow-icon" />
        </button>
      </div>

      <div className="status-card">
        <div className="status-header">
          <h4>Service status</h4>
          <span className="status-operational">
            <span className="status-indicator" />
            Operational
          </span>
        </div>

        {services.map((service, i) => (
          <div className="status-row" key={i}>
            <div className="status-title">
              <span>{service.name}</span>
              <span className="uptime">{service.uptime} uptime</span>
            </div>
            <div className="status-bar">
              {[...Array(30)].map((_, idx) => (
                <div
                  key={idx}
                  className={`status-block ${idx < service.filled ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reliability;
