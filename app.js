import fs from "fs";

fs.readFile("./1.txt", "utf8", (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});

fs.readFile("./1.txt", { encoding: "base64" }, (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});

fs.readFile("./1.txt", (err, data) => {
  if (err) {
    return;
  }
  console.log(data.toString("utf8"));
});
/*
import readline from "readline";

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("How old are you?\n", (age) => {
  console.log(`${age}, huh, nice`);
  terminal.close();
});









import path from "path";
import { sayHi } from "./actions.js";
import { name } from "./name.js";
import dotenv from "dotenv";
import minimist from "minimist";

dotenv.config();

console.log("Wassup :)", process.env.NAME);
console.log(minimist(process.argv.slice(2)));

sayHi(name);

console.log(path.resolve("./app.js"));
*/

// import {sayHi} from './actions.js'
// node app.js --x=2 -y=2 --z 4, --x(true)
