import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png';

function Navbar() {
  const [username, setUsername] = useState(null);
  const [showHi, setShowHi] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    }

    const timer = setTimeout(() => {
      setShowHi(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername(null);
    setMenuOpen(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Sportiva Base Logo" className="logo-img" />
          <span className="brand-name">Sportiva Base</span>
        </Link>
      </div>

      <button
        className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((s) => !s)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explore-activities" className="nav-link">Explore Activities</Link>
        {username && (
          <>
            <Link to="/my-reviews" className="nav-link">My Reviews</Link>
            <Link to="/my-reservations" className="nav-link">My Reservations</Link>
          </>
        )}

      </div>

      <div className='navbar-auth'>
        {username ? (
          <div className="user-profile-nav">
            <span className="user-name-display">
              {showHi && "Hi, 👋 "}
              <strong>{username}</strong>
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="nav-link login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        )}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/explore-activities" className="nav-link" onClick={() => setMenuOpen(false)}>Explore Activities</Link>
          {username && (
            <>
              <Link to="/my-reviews" className="nav-link" onClick={() => setMenuOpen(false)}>My Reviews</Link>
              <Link to="/my-reservations" className="nav-link" onClick={() => setMenuOpen(false)}>My Reservations</Link>
              <div className="mobile-auth">
                <span className="user-name-display">
                  {showHi && "Hi, 👋 "}
                  <strong>{username}</strong>
                </span>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="logout-btn">Logout</button>
              </div>
            </>
          )}

          {!username && (
            <div className="mobile-auth">
              <Link to="/login" className="nav-link login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;