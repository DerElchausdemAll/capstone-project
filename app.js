// import { promises as fs } from "fs";
import { writeFile } from "fs/promises";

console.log("Hello World");
writeFile("foo", "asdasda");

writeFile("hello.json", JSON.stringify({ x: 5, y: "chaaaange" }, null, 4));
