import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import { ProtectedRoute, AdminRoute } from './components/ProtectedRoutes';


import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Services from './pages/Public/Services';
import Projects from './pages/Public/Projects';
import Contact from './pages/Public/Contact';


import Login from './pages/User/Login';
import Register from './pages/User/Register';
import IdeaDiscussion from './pages/User/IdeaDiscussion';


import Dashboard from './pages/Admin/Dashboard';

import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {}
            <Route 
              path="/ideas" 
              element={
                <ProtectedRoute>
                  <IdeaDiscussion />
                </ProtectedRoute>
              } 
            />

            {}
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
