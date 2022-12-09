const fs = require("fs");

const signal = fs.readFileSync(__dirname + "/day6_Input.txt", "utf-8");

let noOfCharactersProcessed = 0;

for (let i = 0; i < signal.length; i++) {
  const startOfPacketMarker = signal.substring(i, i + 4);

  const uniqueElements = new Set(startOfPacketMarker);

  if ([...uniqueElements].length === 4) {
    noOfCharactersProcessed = i + 4;
    console.log(
      "Task 1:Number of characters processed before the first start-of-packet marker is detected: ",
      noOfCharactersProcessed
    );
    break;
  }
}
