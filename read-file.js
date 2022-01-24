import { readFile } from "fs/promises";
// import {promises as fs} from "fs";
// const fs = require("fs");

readFile("./hello.json", "utf8").then((data) => {
  const jsonData = JSON.parse(data);
  console.log(jsonData);
  jsonData.name = "Rick Schick";
  // const jsonData = process.argv.slice(2);

  console.log(jsonData);
});
