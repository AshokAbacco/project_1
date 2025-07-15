import React, { useState } from 'react';
import Pricing from '../pages/Pricing';
 
import Footer from './Footer';

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    question: 'Editor & Templates',
    answer: [
      'Create Unlimited Templates.',
      'Pre-made Building Blocks',
      'Dynamic Personalization',
      'AMP / HTML Editor',
      'Smart Template Suggestions',
      'Share Templates',
      'Rich Text Editor',
      'Export Template Submissions'
    ]
  },
  {
    question: 'Campaigns',
    answer: [
      'Create Unlimited Campaigns',
      'Send Bulk Campaigns',
      'Send Triggered Campaign Via API & Webhook',
      'Send Triggered Campaign Via Bulk List Trigger',
      'Open Rate Recommendation'
    ]
  },
  {
    question: 'Contact Management & Events',
    answer: [
      'CSV Import',
      'API Import (Individual and Batch)',
      'Import via Form Action URL',
      'Suppression List',
      'Static Segment',
      'Dynamic Segment'
    ]
  },
  {
    question: 'Reporting and Analytics',
    answer: [
      'Aggregated Contact Level Analytics',
      'Aggregated Campaign Level Analytics',
      'Aggregated Journey Level Analytics.'
    ]
  }
];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
        <div>
            <div className="container price">
                <h4>All Plans Include</h4>
            
                <div className="price-faq">
                {faqs.map((faq, index) => (
                    <div key={index} className="price-item">
                        <div className="price-question" onClick={() => handleToggle(index)}>
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="price-answer ">
                                {faq.answer.map((option, i) => (
                                <p key={i}><i className="bi bi-check-circle-fill"></i> {option}</p>
                                ))}
                            </div>
                            )}
                    </div>
                ))}
                </div>
            </div>

            <div className=" ">
                 
                <div className="container pri-table">
                <h3>Compare Subscription Rates</h3>

                <table className="pricing-table">
                    <thead>
                        <tr>
                            <td>Monthly Plans</td>
                            <td><img src="https://www.mailmodo.com/static/images/strapi-pages/comparison/mm.svg" alt="Mailmodo" /></td>
                            <td><img src="https://www.mailmodo.com/static/images/strapi-pages/comparison/MC.svg" alt="Mailchimp" /></td>
                            <td><img src="https://res.cloudinary.com/mailmodo/image/upload/v1687524472/strapi/image_525_880ae25b44.svg" alt="Constant Contact" /></td>
                            <td><img src="https://res.cloudinary.com/mailmodo/image/upload/v1687524590/strapi/svgexport_1_15_1_e68fbf0503.svg" alt="Brevo" /></td>
                            <td> <img src="https://res.cloudinary.com/mailmodo/image/upload/v1687524575/strapi/image_526_97450139bb.svg" alt="" /> </td>
                            <td><img src="https://res.cloudinary.com/mailmodo/image/upload/v1687524698/strapi/moosend_email_marketing_and_marketing_automation_software_1_18430cc757.svg" alt="Moosend" /></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <div>Upto 10000</div>
                            <span className="sub-label">Contacts</span>
                        </td>
                        <td>$74</td>
                        <td>$100</td>
                        <td>$120</td>
                        <td>$69</td>
                        <td>$287</td>
                        <td>$88</td>
                        </tr>
                        <tr>
                        <td>
                            <div>Upto 25000</div>
                            <span className="sub-label">Contacts</span>
                        </td>
                        <td>$149</td>
                        <td>$260</td>
                        <td>$310</td>
                        <td>$239</td>
                        <td>$474</td>
                        <td>$160</td>
                        </tr>
                        <tr>
                        <td>
                            <div>Upto 50000</div>
                            <span className="sub-label">Contacts</span>
                        </td>
                        <td>$249</td>
                        <td>$350</td>
                        <td>$430</td>
                        <td>$359</td>
                        <td>$699</td>
                        <td>$315</td>
                        </tr>
                        <tr>
                        <td>
                            <div>Upto 75000</div>
                            <span className="sub-label">Contacts</span>
                        </td>
                        <td>$429</td>
                        <td>$550</td>
                        <td>$645</td>
                        <td>$499</td>
                        <td>$979</td>
                        <td>$416</td>
                        </tr>
                        <tr>
                        <td>
                            <div>Upto 100000</div>
                            <span className="sub-label">Contacts</span>
                        </td>
                        <td>$499</td>
                        <td>$700</td>
                        <td>$860</td>
                        <td>$669</td>
                        <td>$1258</td>
                        <td>$624</td>
                        </tr>
                    </tbody>
                </table>

                </div>
            </div>

            <div><Footer/></div>

        </div>
        

  );
};

// FaqPage Component
const Price = () => {
  return (
    <div> <FAQ /> </div>
  ); 
};

export default Price;
