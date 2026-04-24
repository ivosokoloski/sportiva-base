import './Navbar.css';
import { Link } from 'react-router-dom'; // Провери дали е react-router-dom
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Sportiva Base Logo" className="logo-img" />
          <span className="brand-name">Sportiva Base</span>
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explore-activities" className="nav-link">Explore Activities</Link>
      </div>

      <div className='navbar-auth'>
        <Link to="/login" className="nav-link login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;