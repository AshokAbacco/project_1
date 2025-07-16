import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        setMessage('✅ User registered successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => navigate('/signin'), 1500); // Redirect after delay
      } else {
        const errorText = await res.text();
        setMessage(`❌ ${errorText}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container signup">
        <div className="form-container">
          <div className="form-panel left-panel">
            <div className="content">
              <h2>Welcome Back!</h2>
              <p>Enter your personal details to use all of site features</p>
              <button className="btn sign1" onClick={() => navigate('/signin')}>
                SIGN IN
              </button>
            </div>
          </div>

          <div className="form-panel right-panel">
            <form className="form" onSubmit={handleSubmit}>
              <h2>Create Account</h2>
              <div className="social-icons1">
                <button className="icon1" type="button" disabled><i className="bi bi-google"></i></button>
                <button className="icon1" type="button" disabled><i className="bi bi-facebook"></i></button>
                <button className="icon1" type="button" disabled><i className="bi bi-linkedin"></i></button>
              </div>
              <span>or use your email for registration</span>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn nav-link">SIGN UP</button>

              {message && <p style={{ marginTop: '10px', color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
