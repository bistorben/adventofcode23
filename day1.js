const { log } = require("console");
const fs = require("fs");
const input = fs.readFileSync("day1input.txt", "utf8");

// ------------- day1 part one -------------

// const inputArray = input.split("\n");

// const sum = inputArray.reduce((accu, curr) => {
//   const valueArray = curr.split("").filter((e) => !isNaN(e));
//   const finalValue = parseInt(valueArray[0] + valueArray.slice(-1));
//   return accu + finalValue;
// }, 0);

// console.log(sum);

// ------------ day1 part two ---------------

const inputArray = input.split("\n");

const writtenDigits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const sum = inputArray.reduce((accu, curr) => {
  const testArray = curr.split("");

  let numArray = [];
  let found = false;
  for (let i = 0; i < testArray.length; i++) {
    if (!isNaN(testArray[i])) {
      numArray.push(+testArray[i]);
      found = true;
    } else {
      const proofString = testArray.slice(i, i + 5).join("");

      for (let j = 0; j < writtenDigits.length; j++) {
        if (proofString.startsWith(writtenDigits[j])) {
          numArray.push(j + 1);
          found = true;
          break;
        }
      }
    }
    if (found) {
      break;
    }
  }

  // reset found

  found = false;

  for (let i = testArray.length; i >= 0; i--) {
    if (!isNaN(testArray[i])) {
      numArray.push(+testArray[i]);
      found = true;
      break;
    } else {
      const proofString = testArray.slice(i, i + 5).join("");

      for (let j = 0; j < writtenDigits.length; j++) {
        if (proofString.endsWith(writtenDigits[j])) {
          numArray.push(j + 1);
          found = true;
          break;
        }
      }
    }
    if (found) {
      break;
    }
  }
  const finalValue = +numArray.join("");
  return accu + finalValue;
}, 0);

console.log(sum);

// const testString = "98fourninecvcddkfqkthree";
// const testArray = testString.split("");

// let numArray = [];
// let found = false;
// for (let i = 0; i < testArray.length; i++) {
//   if (!isNaN(testArray[i])) {
//     numArray.push(+testArray[i]);
//     found = true;
//   } else {
//     const proofString = testArray.slice(i, i + 5).join("");

//     for (let j = 0; j < writtenDigits.length; j++) {
//       if (proofString.startsWith(writtenDigits[j])) {
//         numArray.push(j + 1);
//         found = true;
//         break;
//       }
//     }
//   }
//   if (found) {
//     break;
//   }
// }

// // reset found

// found = false;

// for (let i = testArray.length; i >= 0; i--) {
//   if (!isNaN(testArray[i])) {
//     numArray.push(+testArray[i]);
//     break;
//   } else {
//     const proofString = testArray.slice(i, i + 5).join("");

//     for (let j = 0; j < writtenDigits.length; j++) {
//       if (proofString.endsWith(writtenDigits[j])) {
//         numArray.push(j + 1);
//         found = true;
//         break;
//       }
//     }
//   }
//   if (found) {
//     break;
//   }
// }

// console.log(+numArray.join(""));
