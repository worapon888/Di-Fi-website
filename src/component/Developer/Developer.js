import React from "react";
import "./Developer.css";
import Terminal from "../../assets/terminal.png";

const Developer = () => {
  return (
    <div className="developer">
      <div className="container">
        <div className="left">
          <h2>Superpowers for DEFI developer.</h2>
          <p>
            Checkout the<span className="blue">documentation</span>,the
            <span className="blue">quick start</span>or a guide below to
            intergrate your project with thousands of tokens and billons of
            Liquidity.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
