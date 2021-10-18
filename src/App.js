import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Result from "./components/Result";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rules from "./components/Rules";

function App() {
  const[myChoice, setMyChoice]=useState('');
  const [score, setScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);
  const [computer, setComputer] = useState("");
  
  const computerPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };
  return (
    <div>
      <Router>
        <Header score={score} computerScore={computerScore} />
        <Switch>

          <Route exact path="/">
            <Home setMyChoice={setMyChoice} computerPick={computerPick} />
          </Route>

          <Route  path="/game">
            <Result myChoice={myChoice} score={score} setScore={setScore} computerScore={computerScore} setcomputerScore={setcomputerScore} computer={computer}  />
          </Route>

          <Route  path="/rules">
            <Rules />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
