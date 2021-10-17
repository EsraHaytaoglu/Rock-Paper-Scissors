import React from 'react';
import "../css/Result.css";

function Result() {
    return (
        <div className="boxes">
          <a className="box" href="">
            <h3>rock</h3>
            <i className="fa fa-hand-rock-o"></i>
          </a>

          <a className="box" href="">
            <h3>paper</h3>
            <i className="fa fa-hand-paper-o"></i>
          </a>
        </div>
    )
}

export default Result

