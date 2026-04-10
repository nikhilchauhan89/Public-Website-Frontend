import React, { useState } from 'react';
import api from '../../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    try {
      await api.post('/contact', formData);
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>We love to hear from you. Send us a message.</p>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }} className="card">
        {status.message && (
          <div style={{ padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--surface-light)', color: status.type === 'error' ? 'var(--error)' : 'var(--success)', border: '1px solid var(--border)' }}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email URL</label>
            <input 
              type="email" 
              className="form-control" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              className="form-control" 
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
