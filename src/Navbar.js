import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ isAuthenticated, onSignIn, onSignOut }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={isAuthenticated ? onSignOut : onSignIn}>
            {isAuthenticated ? 'Sign Out' : 'Sign In'}
          </button>
        </li>
        {isAuthenticated && (
          <li>
            <button>Profile Management</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
