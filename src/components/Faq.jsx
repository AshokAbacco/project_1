import React, { useState } from 'react';

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription anytime from the account settings.'
    },
    {
      question: 'Can I change my plan?',
      answer: 'Yes, you can change your plan in the account settings under the "Plan" section.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for non-profit organizations. Please contact support for more details.'
    },
    {
      question: 'Is the unlimited plan really unlimited?',
      answer: 'While the unlimited plan provides many features, some limitations may apply based on fair usage policies.'
    },
    {
      question: 'Can I try it for free?',
      answer: 'Yes, we offer a free trial for new users. You can sign up on our website to start the trial.'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {faq.question}
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// FaqPage Component
const Faq = () => {
  return (
    <div className="container faq-page">
      <div className="row">
        {/* Left Side: Information */}
        <div className="col-md-6 info-section">
          <h4>Frequently Asked Questions</h4>
          <p>Can’t find the answer you’re looking for? Don’t hesitate to get in touch with our customer support team.</p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="col-md-6 faq-section">
          <FAQ /> {/* FAQ Component */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
