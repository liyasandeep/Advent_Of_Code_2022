const fs = require("fs/promises");

fs.readFile(__dirname + "/day3_Input.txt", "utf-8")
  .then((contents) => {
    const eachRucksackCompartments = contents.split("\n");
    return eachRucksackCompartments;
  })
  .then((eachRucksackCompartments) => {
    task1(eachRucksackCompartments);
    task2(eachRucksackCompartments);
  });

let priorityArr = [];

// task 1
function task1(eachRucksackCompartments) {
  eachRucksackCompartments.map((element) => {
    const newArray = [];
    newArray.push(element.substring(0, element.length / 2));
    newArray.push(element.substring(element.length / 2));

    const compartment1Set = new Set(newArray[0]); // to get unique elements

    const commonItem = [...newArray[1]].filter((i) => compartment1Set.has(i));
    const uniqueCommonItem = [...new Set(commonItem)]; // new Set(commonItem) gives {} to get result in array use spread operator

    if (/[a-z]/.test(uniqueCommonItem[0])) {
      priorityArr.push(uniqueCommonItem[0].charCodeAt() - 96);
    } else if (/[A-Z]/.test(uniqueCommonItem[0])) {
      priorityArr.push(uniqueCommonItem[0].charCodeAt() - 38);
    }
  });

  console.log(
    "Sum of priorities for task 1",
    priorityArr.reduce((a, c) => a + c, 0)
  );
}

// task2
function task2(eachRucksackCompartments) {
  priorityArr = [];

  let groupArray = [];
  let badge = [];
  let badgeArr = [];
  for (let i = 0; i < eachRucksackCompartments.length; i += 3) {
    groupArray = eachRucksackCompartments.slice(i, i + 3);

    const uniqueElementsArr = [];

    groupArray.map((element) => {
      const uniqueElementsSet = new Set(element);
      uniqueElementsArr.push(uniqueElementsSet);
    });

    // console.log(uniqueElementsArr);

    badge = [...uniqueElementsArr[1]].filter((x) =>
      uniqueElementsArr[0].has(x)
    );

    const badgeSet = new Set(badge);

    badge = [...uniqueElementsArr[2]].filter((x) => badgeSet.has(x));

    badgeArr.push(badge);

    if (/[a-z]/.test(badge[0])) {
      priorityArr.push(badge[0].charCodeAt() - 96);
    } else if (/[A-Z]/.test(badge[0])) {
      priorityArr.push(badge[0].charCodeAt() - 38);
    }
  }
  //   console.log("Badges Array", badgeArr);
  console.log(
    "Sum of priorities for task 2",
    priorityArr.reduce((a, c) => a + c, 0)
  );
}
