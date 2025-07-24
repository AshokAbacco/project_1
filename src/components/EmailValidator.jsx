import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Navbar from './Navbar';
import Footer from './Footer';
import { CiSaveDown1 } from "react-icons/ci";

function EmailValidator() {
  const [input, setInput] = useState('');
  const [validEmails, setValidEmails] = useState([]);
  const [invalidEmails, setInvalidEmails] = useState([]);
  const maxEmails = 150;

  const disallowedEmails = [
    'john123@gmail.com',
    'a@domain.com',
    'test@invalid.com',
    'jane.doe@cnrl.com'
  ];

  const disallowedUsernames = [
    "XXX", "org", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "test", "news", "job", "?", "email", "emails", "doe.john",
    "customerservice", "customerservices", "careers", "career", "example", "xyz.com", "first", "jane.doe", "jdoe",
    "last", "mail", "mails", "press", "unsubscribe", "webmaster", "xyz", "com.com.com.com", "abc", "you", "your", "/",
    "godaddy.com", "abuse", "wildwestdomains", "namecheap", "justhost", "customer.service", "customer.services",
    "customercare", "customerhappiness", "customer-my", "customersupport", "custserv", "customer", "contacts",
    "support", "spam", "contact", "contactus", "csupport", "dggspubs", "websites", "website", "websupport",
    "webcomments", "accommodations", "webpay", "events", "government", "gov", "feedback", "feedbacks", "recruitment",
    "enquires", "webenquires", "technicalservices", "enquiries", "webenquiries", "123456789", "media", "help", "jane",
    "americatradeshow.com", "indeedleadz.com", "primetechleadz.com", "clienthubmarketing.com", "easypaybiz.com",
    "easypaylist.com", "etecbizleads.com", "events-leads.com", "eventsleads.org", "eventsleads.store",
    "eventsquotes.com", "eventsleadsonline.com", "eventsleads.tech", "net", "dataprivacy", "service", "Admin",
    "business.development", "xx", "editor", "employmen", "employment", "engineering", "hr", "hrcentral", "hrdepartment@",
    "hr@", "inquire@", "inquiries@", "inquiry@", "invest@", "investor.relations@", "investor@", "john.doe@",
    "john.smith@", "john@", "johnd@", "johndoe@", "jsmith", "maintenance@", "office@", "officer@", "officestaff@",
    "orders@", "ordersdesk@", "orders", "parts@", "postmaster@", "pr@", "privacy@", "privacyofficer@",
    "promotionalsales@", "quote@", "recruit@", "technical", "recruiting@", "research@", "reservations@",
    "ressourceshumaines@", "resume@", "resume", "tech@", "techical@", "MSN.com", "Outlook.com", "gmail.com",
    "yahoo.com", "yahoo.in", "aol.in", "aol.com", "first_initial", "last_initial", "customer service",
    "customer support", "john.joe", "jane", "webmaster", "someone", "email.com", "enquiry", "enquiries",
    "inquires", "webservice", "web", "ABC", "XYZ", "no-reply", "john", "john.smith", "janed"
  ];

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Flatten and combine all cells
      const emailsFromSheet = json.flat().join(', ');
      setInput(prev => (prev ? `${prev}, ${emailsFromSheet}` : emailsFromSheet));
    };
    reader.readAsArrayBuffer(file);
  };

  const validateEmails = () => {
    const emails = input
      .split(/[\s,;\n]+/)
      .map(email => email.trim().toLowerCase())
      .filter(email => email.length > 0);

    if (emails.length > maxEmails) {
      alert(`Only ${maxEmails} emails are allowed`);
      return;
    }

    const valid = [];
    const invalid = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emails.forEach(email => {
      const isFormatValid = emailRegex.test(email);
      const localPart = email.split('@')[0].trim().toLowerCase();
      const isUsernameDisallowed = disallowedUsernames.some(disallowed => localPart.startsWith(disallowed));
      const isEmailDisallowed = disallowedEmails.includes(email);

      if (isFormatValid && !isEmailDisallowed && !isUsernameDisallowed) {
        valid.push(email);
      } else {
        invalid.push(email);
      }
    });

    setValidEmails(valid);
    setInvalidEmails(invalid);
  };

  const downloadValidEmails = () => {
    const blob = new Blob([validEmails.join('\n')], {
      type: 'text/plain;charset=utf-8'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'valid-emails.txt';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div
        className="email-validator-container mt-5"
        style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}
      >
        <h3>Email Validator <span style={{ fontSize: '14px', color: '#777' }}>(Max {maxEmails})</span></h3>

        {/* File Upload */}
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleExcelUpload}
          style={{
            marginBottom: '10px',
            padding: '5px',
            fontSize: '14px'
          }}
        />

        {/* Manual Entry */}
        <textarea
          rows={8}
          placeholder="Paste or type emails separated by commas, spaces, or new lines"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'vertical',
            marginBottom: '10px'
          }}
        />

        <button
          onClick={validateEmails}
          style={{
            backgroundColor: '#66001f',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Validate Emails
        </button>

        <div style={{ marginTop: '30px' }}>
          {validEmails.length > 0 && (
            <div>
              <h4 style={{ color: 'green' }}>✅ Valid Emails ({validEmails.length})</h4>
              <ul>
                {validEmails.map((email, i) => (
                  <li key={i}>{email}</li>
                ))}
              </ul>

              <button
                onClick={downloadValidEmails}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <CiSaveDown1 /> Download Valid Emails
              </button>
            </div>
          )}

          {invalidEmails.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'red' }}>❌ Invalid Emails ({invalidEmails.length})</h4>
              <ul>
                {invalidEmails.map((email, i) => (
                  <li key={i}>{email}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='mt-5 pt-5'>
        <Footer />
      </div>
    </>
  );
}

export default EmailValidator;
