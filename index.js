const parseArgs = require("minimist");
const { randomArray } = require("./lib/randomArray");

const sConfig = [
  { size: 6, start: 1, end: 33 },
  { size: 1, start: 1, end: 16 },
];
const dConfig = [
  { size: 5, start: 1, end: 35 },
  { size: 2, start: 1, end: 12 },
];

const argv = parseArgs(process.argv.slice(2));

if (argv.d) {
  console.log(randomArray(dConfig).toString());
} else {
  console.log(randomArray(sConfig).toString());
}
