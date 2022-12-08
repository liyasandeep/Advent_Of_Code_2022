const fs = require("fs/promises");
//   function task1() {}

//   function task2() {}

fs.readFile(__dirname + "/day3_Input.txt", "utf-8").then((contents) => {
  const eachRucksackCompartments = contents.split("\n");
  const priorityArr = [];
  eachRucksackCompartments.map((element) => {
    const newArray = [];
    newArray.push(element.substring(0, element.length / 2));
    newArray.push(element.substring(element.length / 2));
    // console.log(newArray);
    const compartment1Set = new Set(newArray[0]); // to get unique elements

    const commonItem = [...newArray[1]].filter((i) => compartment1Set.has(i));
    const uniqueCommonItem = [...new Set(commonItem)]; // new Set(commonItem) gives {} to get result in array use spread operator

    if (/[a-z]/.test(uniqueCommonItem[0])) {
      priorityArr.push(uniqueCommonItem[0].charCodeAt() - 96);
    } else if (/[A-Z]/.test(uniqueCommonItem[0])) {
      priorityArr.push(uniqueCommonItem[0].charCodeAt() - 38);
    }
  });
  console.log(priorityArr);
  console.log(priorityArr.reduce((a, c) => a + c, 0));
  // task1();
  // task2();
});
