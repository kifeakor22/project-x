// src/EmailSignUp.js
import React, { useState } from 'react';

const EmailSignUp = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email to the backend API
    fetch('/api/submit-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(data => {
        setMessage('Thank you for signing up!');
      })
      .catch(error => {
        setMessage('Something went wrong.');
      });
  };

  return (
    <div>
      <h2>Sign Up for Updates</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailSignUp;
