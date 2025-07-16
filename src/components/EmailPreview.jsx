import React from 'react';

const EmailPreview = ({ categorized }) => {
  return (
    <div className="download-mails">
      {['valid', 'invalid', 'risky'].map((type) =>
        categorized?.[type]?.length > 0 ? (
          <div key={type} style={{ marginTop: '30px' }}>
            <h5>
              {type.charAt(0).toUpperCase() + type.slice(1)} Emails (
              {categorized[type].length})
            </h5>
            <ul
              style={{
                maxHeight: '200px',
                overflowY: 'auto',
                paddingLeft: '20px',
              }}
            >
              {categorized[type].map((item, index) => (
                <li key={index}>{item.Email}</li>
              ))}
            </ul>
          </div>
        ) : null
      )}
    </div>
  );
};

export default EmailPreview;
