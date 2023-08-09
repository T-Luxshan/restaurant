import React from 'react'
import Logo from '../Assets/Logo.svg'

const NavBar = () => {
    return ( 
      <div className="navbar-container">
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid foodie">
      <a className="nav-link" href="#">FOODIE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse navigations" id="navbarSupportedContent">
      <ul className="navbar-nav pages"> 
        <li className="nav-item pages">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item pages">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item pages">
          <a className="nav-link" href="#">Contacts</a>
        </li>
        <li className="nav-item pages">
          <button className="primary-button" type="submit">Book&nbsp;Now</button>
        </li>
      </ul>
    </div>
  </nav>
</div>
     );
}
 
export default NavBar;