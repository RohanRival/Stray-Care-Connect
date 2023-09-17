import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li>
          <Link to="/home" style={styles.navbarLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.navbarLink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" style={styles.navbarLink}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.navbarLink}>
            Contact Us
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} style={styles.logoutButton}>
            LOGOUT
          </button>
        </li>
      </ul>
      <Footer />
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '3px',
    position: 'fixed',
    width: '100%',
  },
  navbarList: {
    display: 'flex',
    justifyContent: 'corner',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '20px',
    margin: '0 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  logoutButton: {
    background: 'blue',
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
    width: '70px', 
    height: '40px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1100px',
    
  },
};

export default Navbar;
