import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sportiva</h2>
      </div>

      <div className="navbar-center">
        <a href="#home" className="nav-link">Home</a>
        <a href="#explore" className="nav-link">Explore</a>
        <a href="#how" className="nav-link">How it works</a>
      </div>
    </nav>
  )
}

export default Navbar
