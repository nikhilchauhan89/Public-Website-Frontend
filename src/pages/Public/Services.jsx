import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(data);
      } catch (error) {
        console.error('Error fetching services', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>What we can do for you</p>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map(service => (
            <div key={service._id} className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#6366F1' }}>{service.name}</h3>
              <p style={{ color: '#64748b' }}>{service.description}</p>
            </div>
          ))}
          {services.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#64748b' }}>
              No services found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
