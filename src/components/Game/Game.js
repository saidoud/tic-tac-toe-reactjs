import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import styles from "./Game.module.css";
import { calculateWinner } from "./Helper";

function Game() {
  const [history, setHistory] = useState(Array(9).fill(""));
  const [stepNumber, setStepNumber] = useState(0);
  const [next, setNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = next ? "X" : "O";
  //option Level
  const [isComputer, setIsComputer] = useState(true);
  const [typeGame, setTypeGame] = useState("player");
  const [levelGame, setLevelGame] = useState("easy");

  const handleClick = (index) => {
    if (isComputer === false && x0 === "O") {
      return;
    } else {
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
    }
  };

  //Level Game Function Easy Medium Hard
  const levelGameTicTac = () => {
    if (isComputer === false && x0 === "O") {
      //Easy Levl
      if (levelGame === "easy") {
        for (let index = 0; index < 9; index++) {
          const historyPoint = history.slice(0, stepNumber + 1);
          const current = historyPoint[stepNumber];
          const squares = [...current];
          //return if player win or occuped
          if (winner || squares[index]) continue;
          //select square
          squares[index] = x0;
          setHistory([...historyPoint, squares]);
          setStepNumber(historyPoint.length);
          setNext(!next);
        }
      }
      //Medium Level
      else if (levelGame === "medium") {
      }
      //Hard Level
      else {
      }
    }
  };

  useEffect(levelGameTicTac);

  //onchange level
  const handlechange = (e) => {
    const level = e.target.name;
    if (level === "level") {
      setTypeGame(e.target.value);
      setIsComputer(!isComputer);
    } else if (level === "levelgame") {
      setLevelGame(e.target.value);
      console.log(e.target.value);
    }
  };

  return (
    <div className={styles.game}>
      <button
        className={styles.start}
        onClick={() => {
          setStepNumber(0);
        }}
      >
        {stepNumber === 0 ? "Start" : "Restart"}
      </button>
      <div className={styles.level}>
        <select name="level" value={typeGame} onChange={handlechange}>
          <option value="player">Player</option>
          <option value="computer">Computer</option>
        </select>
        <select
          onChange={handlechange}
          name="levelgame"
          value={levelGame}
          disabled={isComputer}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className={styles.infowrapper}>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + x0}</h3>
      </div>
    </div>
  );
}

export default Game;
