import React, { Component } from "react";
import styles from "./Board.module.css";
import Square from "../Square/Square";

class Board extends Component {
  renderSquare(index) {
    return (
      <Square
        key={index}
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}
      />
    );
  }
  render() {
    return (
      <div className={styles.board}>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    );
  }
}

export default Board;
