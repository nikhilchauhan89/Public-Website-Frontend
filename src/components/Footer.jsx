import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f5f9', padding: '3rem 0', marginTop: 'auto', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}><span style={{ color: 'var(--primary)' }}>Ex</span>Company</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <li>example@gmail.com</li>
            <li>+91 9876543210</li>
            <li>Mohali, Punjab, India</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        © {new Date().getFullYear()} ExCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
