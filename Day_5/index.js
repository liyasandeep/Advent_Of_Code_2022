const fs = require("fs/promises");

fs.readFile(__dirname + "/day5_Input.txt", "utf-8")
  .then((contents) => {
    const [stackPart, procedurePart] = contents.split("\n\n");
    return [stackPart, procedurePart];
  })
  .then(([stackPart, procedurePart]) => {
    let stackRowArr = stackPart.split("\n");
    let newArr = [];
    stackRowArr = stackRowArr.slice(0, -1); // Remove last row of 123
    newArr = stackRowArr.map((element) => {
      return [...element].filter((el, i) => i % 4 === 1);
    });

    let stacksArrColoumWise = new Array(newArr[0].length).fill(""); // creates an array of length 3 here and fills it with empty string

    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[0].length; j++) {
        if (newArr[i][j] !== " ") {
          stacksArrColoumWise[j] += newArr[i][j];
        }
      }
    }

    //   const stacksArr = newArr.reduce(
    //     (arr, row) =>                              //same logic as above but reduce used
    //       row.reduce(
    //         (innerArr, char, j) =>
    //           char === " "
    //             ? innerArr
    //             : innerArr.map((str, k) => (j === k ? str + char : str)),
    //         arr
    //       ),
    //     new Array(newArr[0].length).fill("")
    //   );

    const procedureArr = procedurePart.split("\n").map((element) => {
      return element.split(/\s*[a-z]+\s*/g);
    });

    procedureArr.map((el) => el.shift());
    //   console.log(procedureArr);

    task1(stacksArrColoumWise, procedureArr);
    task2(stacksArrColoumWise, procedureArr);
  });

//   task 1

function task1(stacksArrColoumWise, procedureArr) {
  const moveCrate = (procedure) => {
    procedure.map((el) => parseInt(el));

    const [number, from, to] = procedure;

    const movedCrate = stacksArrColoumWise[from - 1].substring(0, number);

    stacksArrColoumWise = stacksArrColoumWise.map((el, i) =>
      i === from - 1
        ? el.slice(number)
        : i === to - 1
        ? movedCrate.split("").reverse().join("") + el
        : el
    );
  };

  procedureArr.map((row) => moveCrate(row));

  console.log("Task1 Resultant Stack:", stacksArrColoumWise);
  const topOfStack = stacksArrColoumWise.map((el) => el.charAt(0)).join("");
  console.log("Task 1 Top of Stack:", topOfStack);
}
// Task 2
function task2(stacksArrColoumWise, procedureArr) {
  const moveCrate = (procedure) => {
    procedure.map((el) => parseInt(el));

    const [number, from, to] = procedure;

    const movedCrate = stacksArrColoumWise[from - 1].substring(0, number);

    stacksArrColoumWise = stacksArrColoumWise.map((el, i) =>
      i === from - 1 ? el.slice(number) : i === to - 1 ? movedCrate + el : el
    );
  };

  procedureArr.map((row) => moveCrate(row));

  console.log(" Task 2 Resultant Stack:", stacksArrColoumWise);
  const topOfStack = stacksArrColoumWise.map((el) => el.charAt(0)).join("");
  console.log("Task 2 Top of Stack:", topOfStack);
}
