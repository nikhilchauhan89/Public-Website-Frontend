import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>About Us</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          ExCompany is a leading digital agency specializing in building exceptional web applications and software solutions. Founded by a team of passionate engineers and designers, we strive to bridge the gap between complex technology and user-friendly design.
        </p>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Our mission is to empower businesses to thrive in the digital age by delivering innovative, scalable, and secure software. We believe in transparency, continuous learning, and pushing the boundaries of what is possible on the web.
        </p>
        <div className="card" style={{ marginTop: '3rem', backgroundColor: 'var(--surface-light)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Values</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong style={{ color: 'var(--text)' }}>Quality First:</strong> We never compromise on the quality of our code or design.</li>
            <li><strong style={{ color: 'var(--text)' }}>User-Centric:</strong> The end-user is always at the forefront of our decisions.</li>
            <li><strong style={{ color: 'var(--text)' }}>Innovation:</strong> We continuously explore new technologies to deliver the best solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
