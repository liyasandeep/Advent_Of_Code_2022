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

fs.readFile(__dirname + "/day2_Input.txt", "utf-8").then((strategy) => {
  const eachRoundArr = strategy.split("\n");
  // Task 1
  const scoreArr = eachRoundArr.map((element) => {
    let eachRoundScore = 0; // scoreOfShape + outcomeScore

    switch (element) {
      case "A X":
        eachRoundScore = 1 + 3;
        totalScore += eachRoundScore;
        break;
      case "A Y":
        eachRoundScore = 2 + 6;
        totalScore += eachRoundScore;
        break;
      case "A Z":
        eachRoundScore = 3 + 0;
        totalScore += eachRoundScore;
        break;
      case "B X":
        eachRoundScore = 1 + 0;
        totalScore += eachRoundScore;
        break;
      case "B Y":
        eachRoundScore = 2 + 3;
        totalScore += eachRoundScore;
        break;
      case "B Z":
        eachRoundScore = 3 + 6;
        totalScore += eachRoundScore;
        break;
      case "C X":
        eachRoundScore = 1 + 6;
        totalScore += eachRoundScore;
        break;
      case "C Y":
        eachRoundScore = 2 + 0;
        totalScore += eachRoundScore;
        break;
      case "C Z":
        eachRoundScore = 3 + 3;
        totalScore += eachRoundScore;
        break;
    }
  });
  console.log(totalScore);

  // Task 2

  /* X means you need to lose,
   Y means you need to end the round in a draw,
    and Z means you need to win.*/
  totalScore = 0;
  eachRoundArr.map((element) => {
    let eachRoundScore = 0; // scoreOfShape + outcomeScore

    switch (element) {
      case "A X":
        eachRoundScore = 3 + 0;
        totalScore += eachRoundScore;
        break;
      case "A Y":
        eachRoundScore = 1 + 3;
        totalScore += eachRoundScore;
        break;
      case "A Z":
        eachRoundScore = 2 + 6;
        totalScore += eachRoundScore;
        break;
      case "B X":
        eachRoundScore = 1 + 0;
        totalScore += eachRoundScore;
        break;
      case "B Y":
        eachRoundScore = 2 + 3;
        totalScore += eachRoundScore;
        break;
      case "B Z":
        eachRoundScore = 3 + 6;
        totalScore += eachRoundScore;
        break;
      case "C X":
        eachRoundScore = 2 + 0;
        totalScore += eachRoundScore;
        break;
      case "C Y":
        eachRoundScore = 3 + 3;
        totalScore += eachRoundScore;
        break;
      case "C Z":
        eachRoundScore = 1 + 6;
        totalScore += eachRoundScore;
        break;
    }
  });
  console.log(totalScore);
});
