const fs = require("fs");

const fileSystem = fs.readFileSync(__dirname + "/day7_Input.txt", "utf-8");

const fileSystemArr = fileSystem.split("\n");

// console.log(fileSystemArr);  1449447, 8679207
let pathArr = [];
let path = "";
let sizeObj = {};
let size = 0;

fileSystemArr.forEach((element) => {
  const wordArr = element.split(" ");

  if (wordArr[1] === "cd") {
    if (wordArr[2] === "..") {
      pathArr.pop();
    } else pathArr.push(wordArr[2]);
  } else if (wordArr[1] === "ls") {
    return;
  } else if (wordArr[0] === "dir") {
    return;
  } else {
    let size = parseInt(wordArr[0]);
    // console.log(pathArr, size);

    // Add this file's size to the current directory size *and* the size of all parents
    let path = "";
    for (let i of pathArr) {
      if (i === "/") path = path + i;
      else path = path + "/" + i;
      if (sizeObj.hasOwnProperty(path)) {
        sizeObj[path] += size;
      } else {
        sizeObj[path] = 0;

        sizeObj[path] += size;
      }
    }
  }
});

let sumOfDirWithSize = 0;
for (let key in sizeObj) {
  if (sizeObj[key] <= 100000) {
    sumOfDirWithSize += sizeObj[key];
  }
}

// console.log("Directory size Object: ", sizeObj);
console.log(
  "Sum of the total sizes of the directories with a size of at most 100000: ",
  sumOfDirWithSize
);
