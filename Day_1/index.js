const fs = require("fs/promises");
let maxCalories = 0;
let caloriesPerELf = 0;
const caloriesPerELfArr = [];

fs.readFile(__dirname + "/day1_Input.txt", "utf-8")
  .then((calories) => {
    const caloriesArr = calories.split("\n");

    caloriesArr.map((calorie, i, arr) => {
      if (calorie != "") {
        caloriesPerELf += parseInt(calorie);

        if (i + 1 === arr.length) {
          caloriesPerELfArr.push(caloriesPerELf);
        }
      } else {
        caloriesPerELfArr.push(caloriesPerELf);
        caloriesPerELf = 0;
      }
    });

    console.log(
      "Total calories carried by the elf carrying most calories",
      Math.max(...caloriesPerELfArr)
    );
    return caloriesPerELfArr;
  })
  .then((caloriesPerELfArr) => {
    caloriesPerELfArr.sort((a, b) => b - a);

    let totalOfTopThreeElfsCalorie = 0;
    caloriesPerELfArr.slice(0, 3).map((element) => {
      totalOfTopThreeElfsCalorie += element;
    });
    console.log(
      "Total calories carried by the top 3 elves:",
      totalOfTopThreeElfsCalorie
    );
  })
  .catch((err) => {
    console.log(err);
  });
