import React, { useRef } from 'react';
import './login.css';
import email_icon from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/email.png';
import backgroundVideo from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/video.mp4'; 

const ForgetPassword = () => {
  const email = useRef();

  const handleClick = () => {
    window.location.href = '/otp'; 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response = fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Reset password email sent to:', email);
      } else {
        console.error('Failed to send reset password email');
      }
    } catch (error) {
      console.error('Error sending reset password email:', error);   
    }
  };

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className='container'>
        <div className="header">
          <div className="text">Forget Password</div>
          <div className="underline"></div>
        </div>
        <form ref={email} className="inputs" onSubmit={handleSubmit}>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Enter your email" id="email" required/>
          </div>
          <button className="submit design" onClick={handleClick}>Send</button>
        </form>
      </div>
      </div>
  );
};

export default ForgetPassword;
