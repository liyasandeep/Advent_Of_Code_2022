const fs = require("fs");

const fileSystem = fs.readFileSync(__dirname + "/day7_Input.txt", "utf-8");
//sample
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

console.log("Directory size Object: ", sizeObj);
console.log(
  "Sum of the total sizes of the directories with a size of at most 100000: ",
  sumOfDirWithSize
);

let totalDiskSpace = 70000000;
let minSpaceNeedToRunUpdate = 30000000;
let unusedSpace = totalDiskSpace - sizeObj["/"];

let spaceToBeDeleted = minSpaceNeedToRunUpdate - unusedSpace;

if (unusedSpace < minSpaceNeedToRunUpdate) {
  //   let sortedArray = [];
  //   for (var key in sizeObj) {
  //     sortedArray.push([key, sizeObj[key]]);
  //   }

  //   sortedArray.sort( (a, b)=>{
  //     return a[1] - b[1];
  //   });

  //can use Object.entries() to convert the object into an array:

  //   const sortedObj = Object.entries(sizeObj)
  //     .sort(([, a], [, b]) => a - b) //or .sort((a,b)=> a[1]-b[1])
  //     .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}); //to convert the nested array back to object

  const sortedObj = Object.fromEntries(
    Object.entries(sizeObj).sort(([, a], [, b]) => a - b)
  ); // can use Object.fromEntries() to convert array to object.

  //   console.log(sortedObj);
  for (let key in sortedObj) {
    if (sortedObj[key] > spaceToBeDeleted) {
      console.log("Total size of direcyory to be deleted: ", sortedObj[key]);
      return;
    }
  }
}
