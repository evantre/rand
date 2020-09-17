const { Random } = require("random-js");

const random = new Random();
const redSize = 5;
const blueSize = 2;
const red = new Set();
const blue = new Set();

while (true) {
  const value = random.integer(1, 35);
  if (!red.has(value)) {
    red.add(value);
  }

  if (red.size >= redSize) {
    break;
  }
}

while (true) {
  const value = random.integer(1, 12);
  if (!blue.has(value)) {
    blue.add(value);
  }

  if (blue.size >= blueSize) {
    break;
  }
}

console.log(
  ...[...red].sort((x1, x2) => x1 - x2),
  ...[...blue].sort((x1, x2) => x1 - x2)
);
