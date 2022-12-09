const fs = require("fs");

const signal = fs.readFileSync(__dirname + "/day6_Input.txt", "utf-8");

task1(signal);
task2(signal);

function task1(signal) {
  let noOfCharactersProcessed = 0;

  for (let i = 0; i < signal.length; i++) {
    const startOfPacketMarker = signal.substring(i, i + 4);

    const uniqueElements = new Set(startOfPacketMarker);

    if ([...uniqueElements].length === 4) {
      noOfCharactersProcessed = i + 4;
      console.log(
        "Task 1:Number of characters processed before the first start-of-packet marker is : ",
        noOfCharactersProcessed
      );
      break;
    }
  }
}
function task2(signal) {
  let noOfCharactersProcessed = 0;

  for (let i = 0; i < signal.length; i++) {
    const startOfMessageMarker = signal.substring(i, i + 14);

    const uniqueElements = new Set(startOfMessageMarker);

    if ([...uniqueElements].length === 14) {
      noOfCharactersProcessed = i + 14;
      console.log(
        "Task 1:Number of characters processed before the first start-of-message marker is : ",
        noOfCharactersProcessed
      );
      break;
    }
  }
}
