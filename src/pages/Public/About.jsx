import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>About Us</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.8 }}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, volutpat nulla at, vulputate elit.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.8 }}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.
        </p>
        <div className="card" style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Values</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#64748b', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong style={{ color: '#1e293b' }}>Our Mission:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</li>
            <li><strong style={{ color: '#1e293b' }}>Project Title:</strong> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</li>
            <li><strong style={{ color: '#1e293b' }}>Our Vision:</strong> Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
