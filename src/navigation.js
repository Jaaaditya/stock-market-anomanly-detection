import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        
        <li><Link to="/DashBoard">Dashboard</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/forget">Pass</Link></li>
        <li><Link to="/otp">OTP</Link></li>
        <li><Link to="/reset">Reset</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
