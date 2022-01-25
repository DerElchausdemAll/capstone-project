// expected:
// ["foo", "bar", "baz"]

//command: node args.js foo bar baz

const args = process.argv.slice(2);

const myArgs = process.argv.slice(2);
console.log("name", "myArgs");

console.log(args);

// import { argv } from "process";

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// argv.forEach((val, index) => {
//     if (index > 1) {
//       console.log(`${index}: ${val}`);
//     }
//   });
