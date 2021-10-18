import React, { useState, useEffect } from "react";
import "../css/Result.css";
import "../css/Home.css"
import { Link } from "react-router-dom";

function Result({
  score,
  myChoice,
  setScore,
  computerScore,
  setcomputerScore,
  computer
}) {

  const [playerWin, setPlayerWin] = useState("");
 


  const Result = () => {
    if (myChoice === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && computer === "paper") {
      setPlayerWin("lose");
      setcomputerScore(computerScore + 1);
    } else if (myChoice === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setcomputerScore(computerScore + 1);
    } else if (myChoice === "paper" && computer === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setcomputerScore(computerScore + 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [myChoice, computer]);

  const nextGame = () => {
    console.log("tıklandı")
    setScore(0);
    setcomputerScore(0);
    console.log("tıklandı")

  }
  return (
    <>
      <div className="boxes">
        <div className="box" href="">
          <h3> Your Choice </h3>
          <i className={`fa fa-hand-${myChoice}-o`}></i>
        </div>
        {
          score < 3 && computerScore< 3 && (
            <Link to="/" >
            <div className="box" href="">
              <h3 > {playerWin}   </h3>
                <button  className="nextGame"> NEXT ROUND  </button>
            </div>
            </Link>

          )
        }
        {
          score >= 3 &&  (
            
            <div className="box" href="">
              <h3 > 🎉 Congratulations!🎉  </h3>
              <h2> YOU WON 🏅   </h2>
            </div>
          )
        }
        {
          computerScore >= 3 &&  (
            <div className="box" href="">
              <h3 > OOOPS ! YOU LOST 😮‍💨  </h3>
            </div>
          )
        }


        <div className="box" href="">
          <h3> Computer's Choice </h3>
          <i className={`fa fa-hand-${computer}-o`}></i>
        </div>
      </div>
      <Link to="/">
      <button className="rule" onClick={nextGame}>NEXT GAME </button>
      </Link>
    </>
  );
}

export default Result;
