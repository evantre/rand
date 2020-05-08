const { Random } = require("random-js");

const random = new Random();
const redSize = 6;
const red = new Set();

while (true) {
  const value = random.integer(1, 33);
  if (!red.has(value)) {
    red.add(value);
  }

  if (red.size >= redSize) {
    break;
  }
}

const blue = random.integer(1, 16);

console.log(...[...red].sort((x1, x2) => x1 - x2), blue);
