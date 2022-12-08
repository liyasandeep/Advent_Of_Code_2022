const fs = require("fs/promises");

fs.readFile(__dirname + "/day4_Input.txt", "utf-8")
  .then((contents) => {
    const eachPairArr = contents.split("\n");
    return eachPairArr;
  })
  .then((eachPairArr) => {
    task1(eachPairArr);
    task2(eachPairArr);
  });

function task1(eachPairArr) {
  //   console.log(eachPairArr);
  let count = 0;
  let pairArr = [];
  eachPairArr.map((element) => {
    pairArr = element.split(",").map((i) => {
      return i.split("-");
    });
    // console.log(pairArr);
    pairArr = pairArr.map((el) => {
      return [parseInt(el[0]), parseInt(el[1])];
    });

    if (
      (pairArr[0][0] <= pairArr[1][0] && pairArr[0][1] >= pairArr[1][1]) ||
      (pairArr[0][0] >= pairArr[1][0] && pairArr[0][1] <= pairArr[1][1])
    )
      count++;
  });
  console.log(
    "Task1: The number of assignment pairs where one range fully contains the other ",
    count
  );
}

function task2(eachPairArr) {
  let count = 0;
  let pairArr = [];
  eachPairArr.map((element) => {
    pairArr = element.split(",").map((i) => {
      return i.split("-");
    });

    pairArr = pairArr.map((el) => {
      return [parseInt(el[0]), parseInt(el[1])];
    });
    /* case1 -------
                 --------

       case2  ----------
                 -----
        
        case3     --------
                -------

        case4    ----
               --------
    */
    if (pairArr[0][1] >= pairArr[1][0] && pairArr[0][0] <= pairArr[1][1]) {
      count++;
    }
  });
  console.log("Task 2:The number of overlapping assignment pairs ", count);
}
