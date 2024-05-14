import React, { useState } from 'react';
import './login.css';
import email_icon from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/email.png';
import user_icon from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/person.png';
import password_icon from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/password.png';
import backgroundVideo from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/video.mp4'; 


const Login = () => {
  const [action, setAction] = useState("Login");
  const handleDoubleClick = () => {
    window.location.href = '/DashBoard'; 
  };
  

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? <div></div> :
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="User Id" id="username" />
            </div>
          }
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" id="email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" id="password" />
          </div>
        </div>
        {action === "Sign Up" ? <div></div> :
          <div className="forget-password">LOST PASSWORD?<a href="forget" >Click Here</a></div>
        }
        <div className="submit-container">
          <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} onDoubleClick={()=>{setAction("Login")}} >Sign Up</button>
          <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} onDoubleClick={handleDoubleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login; 
