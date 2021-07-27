import React, { useState } from "react";
import Board from "../Board/Board";
import styles from "./Game.module.css";
import { calculateWinner } from "./Helper";

function Game() {
  const [history, setHistory] = useState(Array(9).fill(""));
  const [stepNumber, setStepNumber] = useState(0);
  const [next, setNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = next ? "X" : "O";

  const handleClick = (index) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    //return if player win or occuped
    if (winner || squares[index]) return;

    //select square
    squares[index] = x0;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setNext(!next);
    console.log(historyPoint);
  };

  return (
    <div className={styles.game}>
      <button className={styles.start} onClick={() => setStepNumber(0)}>
        {stepNumber === 0 ? "Start" : "Restart"}
      </button>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className={styles.infowrapper}>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + x0}</h3>
      </div>
    </div>
  );
}

export default Game;
