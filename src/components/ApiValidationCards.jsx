import React from "react";
import { FaEnvelopeOpenText, FaLayerGroup, FaFileAlt,} from "react-icons/fa";
import { TbBrandZapier } from "react-icons/tb";
import { FiActivity } from 'react-icons/fi';
import { FiBarChart2 } from 'react-icons/fi';


const cards = [
  {
    icon: <FaEnvelopeOpenText size={24} color="#66001f" />,
    title: "Real-Time Single Email Validator",
    description: "Sign up form for immediate response with one email in and one email out.",
    inputExample: true,
    linkText: "Get started ›",
    img: "https://www.zerobounce.net/members/assets/images/icons/real-time.png"
  },
  {
    icon: <FaLayerGroup size={24} color="#66001f" />,
    title: "Batch Email Validator",
    description: "Good for small batches. This endpoint allows you to send batches up to 100 emails at a time.",
    inputExample: false,
    linkText: "Get started ›",
    img: "https://www.zerobounce.net/members/assets/images/icons/batch.png"
  },
  {
    icon: <FaFileAlt size={24} color="#66001f" />,
    title: "Bulk Email Validator",
    description:
      "The sendfile API allows you to send a file for bulk email validation. No restriction on file size, number of emails, or number of files.",
    inputExample: false,
    linkText: "Get started ›",
    img: "https://www.zerobounce.net/members/assets/images/icons/bulk.png"
  },
  {
    icon: <TbBrandZapier size={24} color="#66001f" />,
    title: "Integrate through Zapier",
    description:
      "Zapier allows you to instantly connect ZeroBounce with 3,000+ apps to automate your work and find productivity super powers.",
    inputExample: false,
    linkText: "Learn more ›",
    img: "https://docparser.com/wp-content/uploads/2022/07/zapier-ocr-p7qx06nsgas1ssnczez6quztrbuokv0udqx9lytcg0.png"
  },
];
function ApiValidationCards() {
  return (
    <div>
      <div className="validation-card-container">
        {cards.map((card, index) => (
          <div key={index} className="validation-card">
            <div className="validation-card-icon-wrapper">{card.icon}</div>
            <h4 className="validation-card-title">{card.title}</h4>
            <p className="validation-card-description">{card.description}</p>
            <a href="#" className="validation-card-link">{card.linkText}</a>
            <img src={card.img} alt={card.title} className="card-image pt-5 w-75" />
          </div>
        ))}
      </div>

      <div className="">
        <div class="api-section">
            <h2 class="section-title">Getting started with Activity/Scoring API’s</h2>
            <div class="api-grid">
              <div class="api-card wide">
                <div class="api-card-left">
                  <div class="api-icon purple"><FiBarChart2 className="validate-icon" /></div>
                  <div>
                    <h3 class="api-title">Activity Data API</h3>
                    <p class="api-desc">Identify emails that’ve been clicked, opened, forwarded, or unsubscribed.</p>
                    <a href="#" class="api-link">Get started ›</a>
                  </div>
                </div>
                 
              </div>

              <div class="api-card wide">
                <div class="api-card-left">
                  <div class="api-icon purple"><FiActivity className="validate-icon" /></div>
                  <div>
                    <h3 class="api-title">Bulk Email Scoring</h3>
                    <p class="api-desc">Rate the quality level with data and statistics and view catch-all emails.</p>
                    <a href="#" class="api-link">Get started ›</a>
                  </div>
                </div>
                 
              </div>
            </div>

            <h2 class="section-title">API Support</h2>
            <div class="api-grid">
              <div class="api-card small">
                <h3 class="api-title">SDK Kits</h3>
                <p class="api-desc">Prebuilt SDK for popular programming languages</p>
                <a href="#" class="api-link">Get started ›</a>
              </div>

              <div class="api-card small">
                <h3 class="api-title">Postman Collection</h3>
                <p class="api-desc">Download and test our API’s in Postman</p>
                <a href="#" class="api-link">Get started ›</a>
              </div>

              <div class="api-card small">
                <h3 class="api-title">Sandbox Environment</h3>
                <p class="api-desc">Play and test our API for your development purposes</p>
                <a href="#" class="api-link">Get started ›</a>
              </div>

              <div class="api-card small">
                <h3 class="api-title">API Status Page</h3>
                <p class="api-desc">This is the page where you can see Uptime over the past 90 days for our API.</p>
                <a href="#" class="api-link">Get started ›</a>
              </div>
            </div>
          </div>

      </div>

       
      
    </div>
  );
}

export default ApiValidationCards;
