import { readFile } from "fs/promises";
// import {promises as fs} from "fs";
// const fs = require("fs");

readFile("./hello.json", "utf8").then((data) => {
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});
