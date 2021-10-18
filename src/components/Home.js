import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home({ setMyChoice, computerPick }) {
  const setChoice=(e)=> {
    setMyChoice(e.target.id);
    computerPick();
  }
  return (
    <div >
      <div className="boxes">
        <Link to="/game">
          <div className="box" id="rock" onClick={setChoice}>
            <h3>rock</h3>
            <i className="fa fa-hand-rock-o"></i>
          </div>
        </Link>

        <Link to="/game">
          <div className="box" id="paper" onClick={setChoice} >
            <h3>paper</h3>
            <i className="fa fa-hand-paper-o"></i>
          </div>
        </Link>

        <Link to="/game">
          <div className="box" id="scissors" onClick={setChoice} >
            <h3>scissors</h3>
            <i className="fa fa-hand-spock-o"></i>
          </div>
        </Link>
      </div>
      
      <div>
        <Link to="/rules">
        <button className="rule">Rules</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
