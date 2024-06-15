import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us-container">
    <h1 className="bold">About Us</h1>
    <div className="member">
      <div className="member-info">
        <h2>Aaditya Jangid</h2>
        <p>
          Roll No. : 21BCON517
          I am a student at JECRC University, pursuing a BTech in Computer Science and Engineering
          with a specialization in Microsoft Azure.
          I am genuinely enthusiastic about contributing to the success of this project and
          am committed to leveraging my skills and knowledge to achieve our goals.
        </p>
      </div>
    </div>
    <div className="member">
      <div className="member-info">
        <h2>Pragya Shah</h2>
        <p>Roll No. :21BCON411</p>
      </div>
    </div>
    <div className="member">
      <div className="member-info">
        <h2>Sambhav Maheshwari</h2>
        <p>
          Roll No. :21BCON521
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
