import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Price from '../components/Price';


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

// const faqs = [
//   {
//     name: 'Subscription',
//     question: 'Can I cancel my subscription?',
//     answer: [
//       'Yes, you can cancel your subscription anytime from the account settings.',
//       'No extra fees for cancellation.',
//     ],
//   },
//   {
//     name: 'Plan Change',
//     question: 'Can I change my plan?',
//     answer: [
//       'Yes, you can change your plan in the account settings under the "Plan" section.',
//       'Switch anytime with no penalty.',
//     ],
//   },
//   {
//     name: 'Non-Profit Discount',
//     question: 'Do you offer discounts for non-profits?',
//     answer: [
//       'Yes, we offer special pricing for non-profit organizations.',
//       'Please contact support for more details.',
//     ],
//   },
//   {
//     name: 'Unlimited Plan',
//     question: 'Is the unlimited plan really unlimited?',
//     answer: [
//       'While the unlimited plan provides many features, some limitations may apply based on fair usage policies.',
//       'Check the fair usage policy for more details.',
//     ],
//   },
//   {
//     name: 'Free Trial',
//     question: 'Can I try it for free?',
//     answer: [
//       'Yes, we offer a free trial for new users.',
//       'You can sign up on our website to start the trial.',
//     ],
//   },
// ];


function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

  return (
    <div>
      <Navbar />
      
      {/* Plans Intro */}
      <div className="paidplans-container" style={{ backgroundColor: '#810034' }}>
        <div className="plans-para">
          <h3>Choose a Plan to get started</h3>
          <p>All paid plans include API access and list validation.</p>
          <p>Need extra validations? No problem. We've got you covered.</p>
        </div>
      </div>

      {/* Plans Section */}
      
        <div className="paidplans-container" style={{ backgroundColor: '#810034' }}>
          {plans.map((plan, index) => (
           
              <div
                key={index}
                className={`plan-card ${plan.darkCard ? 'dark' : ''} ${plan.mostPopular ? 'most-popular' : ''}`}
                style={{ backgroundColor: 'rgb(179 0 55)' }}
              >
                {plan.mostPopular && <div className="badge">Most popular</div>}
                <h4>{plan.name}</h4>
                <div className="price-section">
                  {plan.oldPrice && <span className="old-price">{plan.oldPrice}</span>}
                  <span className="price text-light">{plan.price}</span>
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
    
      {/* FAQ Section */}
            <Price/>
      {/* <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <strong>{faq.name}</strong>: {faq.question}
            </div>

            
            <div className="faq-answer">
              {faq.answer.map((answer, idx) => (
                <div key={idx} className="answer-item">
                  <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
                  <span>{answer}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      

    </div>
  );
}

export default Pricing;
