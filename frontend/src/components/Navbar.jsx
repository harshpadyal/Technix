import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ handleLogout }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser); // Set loggedInUser if available in local storage
    }
  }, []);

  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src='./images/logo.png' alt='Cup' />
      </div>
      <ul className="navbar-links">
        <li><NavLink exact to="/home" activeclassname="active">HOME</NavLink></li>

        <li><NavLink to="/services" activeclassname="active">SERVICES</NavLink></li>
       
        <li><NavLink to="/appointment" activeclassname="active">APPOINTMENT</NavLink></li>
        
        <li><NavLink to="/outlets" activeclassname="active">NEARBY GARAGES</NavLink></li>

        <li><NavLink to="/offline-map" activeclassname="active">OFFLINE</NavLink></li>

        {/* <li><NavLink to="/blog" activeclassname="active">BLOG</NavLink></li>  */}

        

        {/* Conditionally render dropdown for logged-in user */}
        {loggedInUser ? (
          <li className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
              {loggedInUser} <span className="dropdown-arrow">▼</span>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="#" activeclassname="active">Profile</NavLink>
                <NavLink to="/myappointments" activeclassname="active">My Appointments</NavLink>
                <NavLink to="#" activeclassname="active" onClick={handleLogout} >Logout</NavLink>
              </div>
            )}
          </li>
        ) : (
          <li><NavLink to="/login" activeclassname="active">LOGIN</NavLink></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
