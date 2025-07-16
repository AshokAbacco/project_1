import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { GoFileDirectoryFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

const ValidEmailveri = ({ refreshHistory }) => {
  const [limitMessage, setLimitMessage] = useState('');
  const [categorized, setCategorized] = useState({ valid: [], invalid: [], risky: [] });

  const verifyEmail = async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const trimmedEmail = email.trim().toLowerCase();
        const username = trimmedEmail.split('@')[0];

        const invalidPatterns = [
          'last@', 'first@', '.gov', '.org', 'abuse@', 'xxx', 'xxxx', 'xxxxx', 'xxxxxx',
          'subscriptions@', 'customerservice@', 'warren@', 'webmaster@', 'orders@', 'jobs@',
          'feedback@', 'receipts@', 'shipping@', 'press@', 'memberservices@', 'event', 'expo',
          'exhibit', 'exhibitors', 'privacy@', '@sinco-inc.com', 'thetradeshownetwork.com',
          'someone.com', '@jobs.workablemail.com', '@yoursite.com', 'noreply@', '@example.com',
          '{first}@', '@newyorkpowerlegal.com', 'jobs.', 'enquiries@', 'support@',
          'last_initial@', 'questions@', 'privacy.office@', 'weborder@', 'recruit@',
          'complaints@', 'reportphish@', 'boxbe-notifications@', 'warranty@', 'subscribe@',
          'pressreleases@', 'reservations@', 'trade@', 'ticketoffice@', 'welcome@',
          'admissions@', 'unemed@', 'media@', 'resumes@', '@ardoshon.com', 'tips@cnn.com',
          'conference@', 'members@', 'covid19', 'abuse-contact@', 'addresssales@',
          'comments@', 'facebook@', '@informa.com', 'rakenapp.com', 'rxglobal.com', 'jdoe@',
        ];

        const hasValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
        const hasFake = trimmedEmail.includes('fake');
        const isTooShort = trimmedEmail.length < 5;
        const containsDotInUsername = username.includes('.');
        const matchesInvalidPattern = invalidPatterns.some((pattern) =>
          trimmedEmail.includes(pattern)
        );

        let status = 'Invalid';
        if (
          hasValidFormat &&
          !hasFake &&
          !isTooShort &&
          !containsDotInUsername &&
          !matchesInvalidPattern
        ) {
          if (trimmedEmail.includes('test') || trimmedEmail.includes('info')) {
            status = 'Risky';
          } else {
            status = 'Valid';
          }
        }

        resolve({ email: trimmedEmail, status });
      }, 100);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const extractedEmails = jsonData.map((row) => row[0]).filter(Boolean);

    const MAX_LIMIT = 1500;
    const limitedEmails = extractedEmails.slice(0, MAX_LIMIT);

    if (extractedEmails.length > MAX_LIMIT) {
      setLimitMessage(
        <>
          ⚠️ You have reached the free limit of {MAX_LIMIT} emails.{' '}
          <Link to="/pricing-plan" style={{ color: 'blue', textDecoration: 'underline' }}>
            Please purchase credits to validate more.
          </Link>
        </>
      );
    } else {
      setLimitMessage('');
    }

    const validationResults = await Promise.all(
      limitedEmails.map((email) => verifyEmail(email))
    );

    const valid = [];
    const invalid = [];
    const risky = [];

    validationResults.forEach((res) => {
      if (res.status === 'Valid') valid.push({ Email: res.email });
      else if (res.status === 'Risky') risky.push({ Email: res.email });
      else invalid.push({ Email: res.email });
    });

    const newCategorized = { valid, invalid, risky };
    setCategorized(newCategorized);

    // ✅ Save to backend
    try {
      await axios.post('http://localhost:8000/api/emails', {
        filename: file.name,
        validatedBy: 'admin@example.com',
        categories: newCategorized,
      });

      if (refreshHistory) refreshHistory();
    } catch (error) {
      console.error('❌ Failed to save validation history:', error);
    }
  };

  const downloadAllCategories = () => {
    const wb = XLSX.utils.book_new();

    const addSheet = (name, data) => {
      if (data.length === 0) return;
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, name);
    };

    addSheet('Valid Emails', categorized.valid);
    addSheet('Invalid Emails', categorized.invalid);
    addSheet('Risky Emails', categorized.risky);

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'validated_emails.xlsx');

    // ✅ Clear categorized emails after download
    setCategorized({ valid: [], invalid: [], risky: [] });

    if (refreshHistory) refreshHistory();
  };

  return (
    <div>
        <div style={{ padding: '30px', fontFamily: 'Arial' }}>
          <div style={{ padding: '10px', borderRadius: '10px', textAlign: 'center', marginTop: '20px' }}>
            <div style={{ marginTop: '5px' }}>
              <div style={{ fontSize: '40px', color: '#66001f' }}>
                <GoFileDirectoryFill />
              </div>
              <p style={{ margin: '10px 0' }}>Drag and drop your files here</p>

              <label htmlFor="file-upload" style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#66001f',
                color: '#fff',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Browse Files
              </label>
              <input
                type="file"
                id="file-upload"
                accept=".csv, .xls, .xlsx, .txt"
                onChange={handleFileUpload}
                hidden
              />
              <span> on your computer</span>
            </div>
          </div>

          {limitMessage && (
            <p style={{ color: 'red', marginTop: '20px' }}>{limitMessage}</p>
          )}

          {(categorized.valid.length > 0 || categorized.invalid.length > 0 || categorized.risky.length > 0) && (
            <button
              onClick={downloadAllCategories}
              style={{
                marginTop: '30px',
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Download Categorized Emails
            </button>
          )}

          
         

        </div>
         {/* <div className="download-mails">
            {['valid', 'invalid', 'risky'].map((type) => (
              categorized[type].length > 0 && (
                
                <div key={type} style={{ marginTop: '30px', }}>
                  <h5>{type.charAt(0).toUpperCase() + type.slice(1)} Emails ({categorized[type].length})</h5>
                  <ul style={{ maxHeight: '200px', overflowY: 'auto', paddingLeft: '20px' }}>
                    {categorized[type].map((item, index) => (
                      <li key={index}>{item.Email}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div> */}
    </div>
    
  );
};

export default ValidEmailveri;
