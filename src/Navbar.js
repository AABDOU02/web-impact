import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Web Impact</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/web-impact/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/web-impact/statistics">Statistics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
