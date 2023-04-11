import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/b038b805-cebf-4bc1-9c4b-464e63f96df3"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="'Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email Communication from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
