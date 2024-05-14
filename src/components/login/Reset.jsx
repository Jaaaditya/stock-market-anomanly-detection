import React from "react";
import backgroundVideo from 'C:/Users/jangi/OneDrive/Desktop/PROJECTS/stock market/stock-dashboard-master/src/assets/video.mp4'; 

export default function Reset({ setPage }) {
  function changePassword() {
    setPage("login");
  }

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="header">
            <h2 className="text">
              Change Password
            </h2>
            <form>
              <div className="inputs">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="New Password"
                  className="input"
                  required
                ></input>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="input"
                  required
                ></input>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="forget-password"
                  >
                    I accept the{" "}
                    <a href="terms">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </form>
            <a
              onClick={changePassword}
              className="submit"
              href="login"
            >
              Reset passwod
            </a>
        </div>
      </div>
    </div>
  );
}
