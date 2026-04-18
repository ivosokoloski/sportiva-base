import './Navbar.css'
import  {Link} from 'react-router'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sportiva</h2>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="explore-activities" className="nav-link">Explore</Link>
        <Link to="how" className="nav-link">How it works</Link>
      </div>
    </nav>
  )
}

export default Navbar
