import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      {}
      <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Building the <span style={{ color: '#6366F1' }}>Digital Future</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
           Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et.
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
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--background)', color: '#6366F1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border)' }}>
                <Code size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lorem One</h3>
              <p style={{ color: '#64748b' }}>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.</p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#ffffff', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #e2e8f0' }}>
                <Layout size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lorem One</h3>
              <p style={{ color: '#64748b' }}>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--background)', color: 'var(--error)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border)' }}>
                <Shield size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lorem One</h3>
              <p style={{ color: '#64748b' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
