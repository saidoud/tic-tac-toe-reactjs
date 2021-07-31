export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// // returns list of the indexes of empty spots on the board
// function emptyIndexies(squares) {
//   return squares.reduce((acc, val, idx) => {
//     if (!val) {
//       acc.push(idx);
//     }
//     return acc;
//   }, []);
// }

// export function isWinner(squares, player) {
//   return calculateWinner(squares) === player;
// }

// export function calcMinimax(squares, playerToHelp, human, computer) {
//   console.log(squares);

//   function calcScores(squares, availSpots, depth) {
//     if (isWinner(squares, computer)) {
//       // player
//       // computer would win
//       if (computer === playerToHelp) {
//         return 10 - depth;
//       } else {
//         return depth - 10;
//       }
//     } else if (isWinner(squares, human)) {
//       // opponent
//       // human would win
//       if (human === playerToHelp) {
//         return 10 - depth;
//       } else {
//         return depth - 10;
//       }
//     } else if (availSpots.length === 0) {
//       // no more moves available, it is a draw
//       return 0;
//     }

//     return null;
//   }

//   // the main minimax function
//   function minimax(squares, player, depth) {
//     // available spots
//     const availSpots = emptyIndexies(squares);

//     //
//     const result = calcScores(squares, availSpots, depth);

//     if (result) {
//       return result; // terminate
//     }

//     const scores = [];
//     // loop through available spots
//     // fill moves and scores
//     const moves = availSpots.map((val, idx) => {
//       const nextPlayer = player === human ? computer : human;

//       //move to test with current player
//       squares[val] = player; // e.g. set "X" at the idx place
//       //recursive with depth+1

//       const score = minimax(squares, nextPlayer, depth + 1);
//       scores.push(score);
//       //reverse move
//       squares[val] = null;
//       return val; // moves.push move
//     });

//     let scoreIndex = 0;
//     if (player === playerToHelp) {
//       // playerToHelp has to maximize its points: max calc
//       scoreIndex = scores.reduce(
//         (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
//         0
//       );
//     } else {
//       // opponents wants to minimize playerToHelp points: min calc
//       scoreIndex = scores.reduce(
//         (iMin, x, i, arr) => (x < arr[iMin] ? i : iMin),
//         0
//       );
//     }

//     if (depth === 0) {
//       return moves[scoreIndex]; // best move
//     }
//     return scores[scoreIndex];
//   }

//   const res = minimax(squares, playerToHelp, 0);
//   console.log(res);
//   return res;
// }
