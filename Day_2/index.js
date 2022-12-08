//  A for Rock, B for Paper, and C for Scissors
//  X for Rock, Y for Paper, and Z for Scissors A=X=1 ,B=Y=2, C=Z=3

// Your total score is the sum of your scores for each round.
// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

/* 
Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

A Y (2+6) a,x =3,1 b,y =3,2, c,z =3,3
B X (1+0) a,y = 6,2 b,x = 0,1 c,x= 6,1
C Z (3+3) a,z = 0,3 b,z = 6,3 c,y = 0,2

total(8+1+6)=15
*/
let totalScore = 0; // total of eachRoundScore

const fs = require("fs/promises");
const shapeScore = { rock: 1, paper: 2, scissors: 3 };
const shapes = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

function eachRoundScore(opponentMove, myMove) {
  if (opponentMove === myMove) {
    return shapeScore[myMove] + 3;
  }

  if (
    (opponentMove === "rock" && myMove === "paper") ||
    (opponentMove === "paper" && myMove === "scissors") ||
    (opponentMove === "scissors" && myMove === "rock")
  ) {
    return shapeScore[myMove] + 6;
  }

  if (
    (opponentMove === "rock" && myMove === "scissors") ||
    (opponentMove === "paper" && myMove === "rock") ||
    (opponentMove === "scissors" && myMove === "paper")
  ) {
    return shapeScore[myMove] + 0;
  }
}

fs.readFile(__dirname + "/day2_Input.txt", "utf-8").then((strategy) => {
  const eachRoundArr = strategy
    .split("\n")
    .map((element) => element.split(" "));

  // Task 1

  function task1() {
    const scoreArr = eachRoundArr.map((element) => {
      let eachRoundScoreValue = eachRoundScore(
        shapes[element[0]],
        shapes[element[1]]
      );
      return eachRoundScoreValue;
    });

    totalScore = scoreArr.reduce((acc, curr) => acc + curr, 0);
    console.log("Total Score-task1", totalScore);
  }
  // Task 2

  /* X means you need to lose,
     Y means you need to end the round in a draw,
      and Z means you need to win.*/

  function task2() {
    const scoreArr = eachRoundArr.map((element) => {
      let ourMove = "";
      if (
        (element[1] === "X" && element[0] === "A") ||
        (element[1] === "Z" && element[0] === "B") ||
        (element[1] === "Y" && element[0] === "C")
      ) {
        ourMove = "scissors";
      } else if (
        (element[1] === "Y" && element[0] === "A") ||
        (element[1] === "X" && element[0] === "B") ||
        (element[1] === "Z" && element[0] === "C")
      ) {
        ourMove = "rock";
      }
      if (
        (element[1] === "Z" && element[0] === "A") ||
        (element[1] === "Y" && element[0] === "B") ||
        (element[1] === "X" && element[0] === "C")
      ) {
        ourMove = "paper";
      }
      let eachRoundScoreValue = eachRoundScore(shapes[element[0]], ourMove);
      return eachRoundScoreValue;
    });

    totalScore = scoreArr.reduce((acc, curr) => acc + curr, 0);
    console.log("Total Score-task2", totalScore);
  }
  task1();
  task2();
});
