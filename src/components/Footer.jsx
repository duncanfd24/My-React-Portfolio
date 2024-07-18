import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        <a href="https://github.com/duncanfd24" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/fred-duncan-phr-12459143/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaLinkedin size={30} />
        </a>
        <a href="https://stackoverflow.com/users/23333635/user23333635" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaStackOverflow size={30} />
        </a>
      </div>
      <p>&copy; 2024 Fred Duncan. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0px 0',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '5px',
};

const iconStyle = {
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
};

export default Footer;

