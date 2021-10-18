import React from "react";
import "../css/Rules.css";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="body">
      <div className="modal">
        <p className="message">
        You can only earn 1 score per round. 3 scores wins !
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
