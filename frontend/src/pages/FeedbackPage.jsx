import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeedbackPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !feedback) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Save feedback to local storage (or handle it as needed)
    const feedbackData = { name, email, feedback, date: new Date() };
    const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    localStorage.setItem('feedback', JSON.stringify([...existingFeedback, feedbackData]));

    // Clear form
    setName('');
    setEmail('');
    setFeedback('');

    toast.success('Feedback submitted successfully!');
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', backgroundColor: '#fce4ec' }}>
        <h2 style={{ color: '#57111B', textAlign: 'center' }}>Feedback for Our Mechanic</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#57111B' }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#57111B' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#57111B' }}>How was our service:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows="4"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#e91e63',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default FeedbackPage;
