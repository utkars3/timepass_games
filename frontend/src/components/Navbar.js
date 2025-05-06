// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  return (
    <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <Link to="/create" style={linkStyle}>Create Game</Link>
      <Link to="/games" style={linkStyle}>Game List</Link>
      <Link to="/fetch" style={linkStyle}>Fetch Game by ID</Link>
    </nav>
  );
};

export default Navbar;
