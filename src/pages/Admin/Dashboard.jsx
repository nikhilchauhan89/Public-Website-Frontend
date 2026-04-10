import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [ideas, setIdeas] = useState([]);

  
  const [newProject, setNewProject] = useState({ title: '', description: '', techStack: '', image: '' });
  const [newService, setNewService] = useState({ name: '', description: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [editingService, setEditingService] = useState(null);

  const fetchData = async () => {
    if (activeTab === 'projects') {
      const res = await api.get('/projects');
      setProjects(res.data);
    } else if (activeTab === 'services') {
      const res = await api.get('/services');
      setServices(res.data);
    } else if (activeTab === 'contacts') {
      const res = await api.get('/contact');
      setContacts(res.data);
    } else if (activeTab === 'ideas') {
      const res = await api.get('/ideas');
      setIdeas(res.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleDelete = async (id, resource) => {
    if (window.confirm('Are you sure?')) {
      await api.delete(`/${resource}/${id}`);
      fetchData();
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const payload = { ...newProject, techStack: newProject.techStack.split(',').map(s => s.trim()) };
    await api.post('/projects', payload);
    setNewProject({ title: '', description: '', techStack: '', image: '' });
    fetchData();
  };

  const handleCreateService = async (e) => {
    e.preventDefault();
    await api.post('/services', newService);
    setNewService({ name: '', description: '' });
    fetchData();
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const payload = { ...editingProject, techStack: typeof editingProject.techStack === 'string' ? editingProject.techStack.split(',').map(s => s.trim()) : editingProject.techStack };
    await api.put(`/projects/${editingProject._id}`, payload);
    setEditingProject(null);
    fetchData();
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    await api.put(`/services/${editingService._id}`, editingService);
    setEditingService(null);
    fetchData();
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', display: 'flex', gap: '2rem' }}>
      {}
      <div className="card" style={{ width: '250px', height: 'fit-content' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Admin Panel</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {['projects', 'services', 'contacts', 'ideas'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{ padding: '0.75rem 1rem', textAlign: 'left', background: activeTab === tab ? 'var(--primary)' : 'transparent', color: activeTab === tab ? 'white' : 'var(--text)', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', textTransform: 'capitalize' }}
            >
              Manage {tab}
            </button>
          ))}
        </div>
      </div>

      {}
      <div style={{ flex: 1 }}>
        <div className="card">
          <h2 style={{ textTransform: 'capitalize', marginBottom: '1.5rem' }}>Manage {activeTab}</h2>

          {}
          {activeTab === 'projects' && (
            <div>
              <form onSubmit={handleCreateProject} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                <h4>Add New Project</h4>
                <div className="form-group"><input type="text" placeholder="Title" className="form-control" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required /></div>
                <div className="form-group"><input type="text" placeholder="Description" className="form-control" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} required /></div>
                <div className="form-group"><input type="text" placeholder="Tech Stack (comma separated)" className="form-control" value={newProject.techStack} onChange={e => setNewProject({...newProject, techStack: e.target.value})} /></div>
                <div className="form-group"><input type="text" placeholder="Image URL" className="form-control" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} /></div>
                <button className="btn btn-primary btn-sm">Add Project</button>
              </form>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projects.map(p => (
                   <div key={p._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                     {editingProject && editingProject._id === p._id ? (
                       <form onSubmit={handleUpdateProject} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                         <input type="text" className="form-control" value={editingProject.title} onChange={e => setEditingProject({...editingProject, title: e.target.value})} required />
                         <input type="text" className="form-control" value={editingProject.description} onChange={e => setEditingProject({...editingProject, description: e.target.value})} required />
                         <input type="text" className="form-control" value={editingProject.techStack} onChange={e => setEditingProject({...editingProject, techStack: e.target.value})} />
                         <input type="text" className="form-control" value={editingProject.image} onChange={e => setEditingProject({...editingProject, image: e.target.value})} />
                         <div style={{ display: 'flex', gap: '0.5rem' }}>
                           <button type="submit" className="btn btn-primary btn-sm">Save</button>
                           <button type="button" className="btn btn-sm" onClick={() => setEditingProject(null)}>Cancel</button>
                         </div>
                       </form>
                     ) : (
                       <>
                         <div><strong>{p.title}</strong><br/><small>{p.description}</small></div>
                         <div style={{ display: 'flex', gap: '0.5rem' }}>
                           <button className="btn btn-sm" style={{ backgroundColor: 'var(--primary)', color: 'white' }} onClick={() => setEditingProject({...p, techStack: p.techStack.join(', ')})}>Edit</button>
                           <button className="btn btn-sm" style={{ backgroundColor: 'var(--error)', color: 'white' }} onClick={() => handleDelete(p._id, 'projects')}>Delete</button>
                         </div>
                       </>
                     )}
                   </div>
                ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'services' && (
            <div>
              <form onSubmit={handleCreateService} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                <h4>Add New Service</h4>
                <div className="form-group"><input type="text" placeholder="Name" className="form-control" value={newService.name} onChange={e => setNewService({...newService, name: e.target.value})} required /></div>
                <div className="form-group"><input type="text" placeholder="Description" className="form-control" value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})} required /></div>
                <button className="btn btn-primary btn-sm">Add Service</button>
              </form>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {services.map(s => (
                   <div key={s._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                     {editingService && editingService._id === s._id ? (
                       <form onSubmit={handleUpdateService} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                         <input type="text" className="form-control" value={editingService.name} onChange={e => setEditingService({...editingService, name: e.target.value})} required />
                         <input type="text" className="form-control" value={editingService.description} onChange={e => setEditingService({...editingService, description: e.target.value})} required />
                         <div style={{ display: 'flex', gap: '0.5rem' }}>
                           <button type="submit" className="btn btn-primary btn-sm">Save</button>
                           <button type="button" className="btn btn-sm" onClick={() => setEditingService(null)}>Cancel</button>
                         </div>
                       </form>
                     ) : (
                       <>
                         <div><strong>{s.name}</strong><br/><small>{s.description}</small></div>
                         <div style={{ display: 'flex', gap: '0.5rem' }}>
                           <button className="btn btn-sm" style={{ backgroundColor: 'var(--primary)', color: 'white' }} onClick={() => setEditingService(s)}>Edit</button>
                           <button className="btn btn-sm" style={{ backgroundColor: 'var(--error)', color: 'white' }} onClick={() => handleDelete(s._id, 'services')}>Delete</button>
                         </div>
                       </>
                     )}
                   </div>
                ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'contacts' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.map(c => (
                 <div key={c._id} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                   <strong>{c.name} ({c.email})</strong>
                   <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>{c.message}</p>
                   <small style={{ color: 'var(--primary)' }}>{new Date(c.createdAt).toLocaleDateString()}</small>
                 </div>
              ))}
              {contacts.length === 0 && <p>No contacts found.</p>}
            </div>
          )}

          {}
          {activeTab === 'ideas' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ideas.map(i => (
                 <div key={i._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                   <div>
                     <strong>{i.title}</strong> <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: 'var(--surface-light)', borderRadius: '1rem' }}>{i.status}</span>
                     <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>{i.description}</p>
                     <small>By: {i.userId?.name}</small>
                   </div>
                   <button className="btn btn-sm" style={{ backgroundColor: 'var(--error)', color: 'white', height: 'fit-content' }} onClick={() => handleDelete(i._id, 'ideas')}>Delete</button>
                 </div>
              ))}
              {ideas.length === 0 && <p>No ideas found.</p>}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
