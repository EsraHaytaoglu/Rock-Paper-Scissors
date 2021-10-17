import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="boxes">
        <Link to="/game">
          <a className="box" href="">
            <h3>rock</h3>
            <i className="fa fa-hand-rock-o"></i>
          </a>
        </Link>

        <Link to="/game">
          <a className="box" href="">
            <h3>paper</h3>
            <i className="fa fa-hand-paper-o"></i>
          </a>
        </Link>

        <Link to="/game">
          <a className="box" href="">
            <h3>scissors</h3>
            <i className="fa fa-hand-spock-o"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
