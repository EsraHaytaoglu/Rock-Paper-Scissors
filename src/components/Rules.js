import React from "react";
import "../css/Rules.css";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="body">
      <div className="modal">
        <p className="message">
        If the player wins,  gain 1 point. If the computer wins, the player loses one point.
        <ul>
            <li>Paper beats Rock</li>
            <li>Rock beats Scissors</li>
            <li>Scissors beats Paper</li>
        </ul>
        </p>
        <div className="options">
            <Link to="/">
          <button className="btn"> OK </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rules;
