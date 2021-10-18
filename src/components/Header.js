import React from "react";
import "../App.css";
import "../css/Header.css";

function Header({score, computerScore}) {
  return (
    <div>

      <div className="container2">
        <div className="button">{score}</div>
      </div>

      <h2>
        rock <span>⚡</span>paper<span>⚡</span>scissors
      </h2>

      <div className="container">
        <div className="button">{computerScore}</div>
      </div>
    </div>
  );
}

export default Header;
