import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <div>
      <div className="boxes">
        <a className="box" href="">
          <h3>rock</h3>
          <i className="fa fa-hand-rock-o"></i>
        </a>

        <a className="box" href="">
          <h3>paper</h3>
          <i className="fa fa-hand-paper-o"></i>
        </a>

        <a className="box" href="">
          <h3>scissors</h3>
          <i className="fa fa-hand-spock-o"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
