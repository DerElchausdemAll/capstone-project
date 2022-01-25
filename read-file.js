import { readFile, writeFile } from "fs/promises";
// import process from "process";

//
// Read hello.json
//

// readFile("./hello.json", "utf8").then((data) => {
//   const jsonData = JSON.parse(data);
//   console.log(data);
// });

//
// Add data in terminal with: node read-file.js name Rick
//

readFile("./hello.json", "utf8")
  .then((data) => {
    return JSON.parse(data);
  })
  .then((data) => {
    const [key, value] = process.argv.slice(2);
    // data.name = value;
    data[key] = value;
    return data;
  })
  .then((data) => {
    writeFile("hello.json", JSON.stringify(data, null, 4));
  });
