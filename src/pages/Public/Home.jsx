import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      {}
      <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Building the <span style={{ color: 'var(--primary)' }}>Digital Future</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We deliver cutting-edge web applications and modern digital solutions to help your business scale and succeed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/projects" className="btn btn-primary btn-lg" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ fontSize: '1.1rem' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Why Choose Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Code size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modern Tech Stack</h3>
              <p style={{ color: 'var(--text-muted)' }}>We use React, Node.js, and MongoDB to build robust and scalable full-stack applications.</p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Layout size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Stunning UI/UX</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our designs focus on aesthetics and user experience, ensuring your product stands out.</p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Shield size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Secure & Reliable</h3>
              <p style={{ color: 'var(--text-muted)' }}>We prioritize security and reliability in every line of code we write for your peace of mind.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
