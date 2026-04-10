import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, LayoutDashboard, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-brand">
          <span className="brand-accent">Ex</span>Company
        </Link>

        {}
        <div className="nav-menu">
           {navLinks.map((link) => (
             <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
           ))}
        </div>

        <div className="nav-actions hidden-mobile">
          {user ? (
            <>
              {user.role === 'admin' ? (
                <Link to="/admin" className="nav-link flex-center">
                  <LayoutDashboard className="icon" size={18} /> Admin
                </Link>
              ) : (
                <Link to="/ideas" className="nav-link flex-center">
                  <User className="icon" size={18} /> Panel
                </Link>
              )}
              <button onClick={handleLogout} className="btn-logout flex-center">
                <LogOut className="icon" size={18} /> Logout
              </button>
            </>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
            </div>
          )}
        </div>

        {}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
             <Link key={link.name} to={link.path} className="mobile-link" onClick={() => setIsOpen(false)}>{link.name}</Link>
          ))}
          <hr className="mobile-divider"/>
          {user ? (
            <>
              {user.role === 'admin' ? (
                <Link to="/admin" className="mobile-link" onClick={() => setIsOpen(false)}>Admin Dashboard</Link>
              ) : (
                <Link to="/ideas" className="mobile-link" onClick={() => setIsOpen(false)}>My Panel</Link>
              )}
              <button onClick={handleLogout} className="mobile-link text-left" style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '1rem', color: 'var(--text)' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mobile-link" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="mobile-link" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
