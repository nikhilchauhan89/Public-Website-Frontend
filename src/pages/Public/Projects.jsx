import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Our Work</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>Recent projects we've delivered</p>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map(project => (
            <div key={project._id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {project.image ? (
                <div style={{ height: '200px', backgroundColor: '#f1f5f9', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              ) : (
                 <div style={{ height: '200px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>No Image</div>
              )}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>{project.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.techStack?.map((tech, index) => (
                    <span key={index} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: '#6366F1', color: '#ffffff', borderRadius: '1rem' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
             <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#64748b' }}>
                No projects found.
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
