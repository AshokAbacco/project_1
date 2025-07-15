import React from "react";

const plans = [
  {
    name: "Enterprise",
    price: "$1,899",
    oldPrice: null,
    perUser: true,
    features: [
      "Enable list validation",
      "Unlimited validations",
      "99.99% Guaranteed Uptime SLA",
      "Priority support",
    ],
    mostPopular: false,
    darkCard: false,
  },
  {
    name: "Unlimited",
    price: "$49.80",
    oldPrice: "$498",
    perUser: true,
    features: [
      "Enable list validation",
      "Unlimited validations",
    ],
    mostPopular: false,
    darkCard: true,
  },
  {
    name: "Business",
    price: "$9.80",
    oldPrice: "$98",
    perUser: true,
    features: [
      "Enable list validation",
      "50,000 validations per month included",
      "$0.002 per extra validation",
    ],
    mostPopular: true,
    darkCard: true,
  },
  {
    name: "Pro",
    price: "$4.80",
    oldPrice: "$48",
    perUser: true,
    features: [
      "Enable list validation",
      "10,000 validations per month included",
      "$0.005 per extra validation",
    ],
    mostPopular: false,
    darkCard: false,
  },
];

function Paidplans() {
  return (
    <>
      {/* Top promo section */}
      <div className="paidplans-container">
        <div className="plans-para">
          <h3>Get started with 90% off your first month</h3> 
          <p>All paid plans include API access and list validation.</p>
          <p>Need extra validations? No problem. We've got you covered.</p>
        </div>
      </div>

      {/* Plans section */}
      <div className="paidplans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.darkCard ? 'dark' : ''} ${plan.mostPopular ? 'most-popular' : ''}`}>
            {plan.mostPopular && <div className="badge">Most popular</div>}
            <h4>{plan.name}</h4>
            <div className="price-section">
              {plan.oldPrice && <span className="old-price">{plan.oldPrice}</span>}
              <span className="price">{plan.price}</span>
              {plan.perUser && <span className="per-user">per user<br />per month</span>}
            </div>
            <button className="get-started">Get started →</button>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Paidplans;
