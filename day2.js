const fs = require("fs");
const input = fs.readFileSync("day2input.txt", "utf8");

// ------------- day2 part one -------------
// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

const inputArray = input.split("\n");
console.log(parseInt(inputArray[0]));

// console.log(inputArray);

// ------------ day1 part two ---------------
