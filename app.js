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

// import {sayHi} from './actions.js'
// node app.js --x=2 -y=2 --z 4, --x(true)
