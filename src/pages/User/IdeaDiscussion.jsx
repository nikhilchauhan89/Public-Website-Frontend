import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const IdeaDiscussion = () => {
  const [ideas, setIdeas] = useState([]);
  const [myIdeas, setMyIdeas] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchIdeas = async () => {
    try {
      const { data } = await api.get('/ideas');
      setIdeas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMyIdeas = async () => {
    try {
      const { data } = await api.get('/ideas/myideas');
      setMyIdeas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIdeas();
    fetchMyIdeas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/ideas', { title, description });
      setTitle('');
      setDescription('');
      fetchIdeas();
      fetchMyIdeas();
      setActiveTab('my');
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'approved') return 'var(--success)';
    if (status === 'rejected') return 'var(--error)';
    return 'var(--primary)';
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Idea Discussion Board</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Submit a New Idea</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Idea Title</label>
              <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Idea</button>
          </form>
        </div>


        <div>
          <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '2rem' }}>
            <button 
              style={{ background: 'none', border: 'none', color: activeTab === 'all' ? 'var(--primary)' : 'var(--text-muted)', borderBottom: activeTab === 'all' ? '2px solid var(--primary)' : 'none', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => setActiveTab('all')}
            >
              All Ideas
            </button>
            <button 
              style={{ background: 'none', border: 'none', color: activeTab === 'my' ? 'var(--primary)' : 'var(--text-muted)', borderBottom: activeTab === 'my' ? '2px solid var(--primary)' : 'none', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => setActiveTab('my')}
            >
              My Submissions
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(activeTab === 'all' ? ideas : myIdeas).map(idea => (
              <div key={idea._id} className="card" style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{idea.title}</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '1rem', border: `1px solid ${getStatusColor(idea.status)}`, color: getStatusColor(idea.status), textTransform: 'uppercase' }}>
                    {idea.status}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{idea.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>By {idea.userId?.name || 'You'}</span>
                  <span>{new Date(idea.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
            {(activeTab === 'all' ? ideas : myIdeas).length === 0 && (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No ideas found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDiscussion;
