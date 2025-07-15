import React, { useRef, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FileUploader = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef();

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('https://httpbin.org/post', formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Upload complete!');
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
       

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />

      {/* Single visible button */}
      <button onClick={handleClick} className="btn btn-success mb-3 w-100">
        <i className="bi bi-upload me-2"></i>
        Upload File
      </button>

      {uploadProgress > 0 && (
        <div className="progress mb-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${uploadProgress}%` }}
            aria-valuenow={uploadProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {uploadProgress}%
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
