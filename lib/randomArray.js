const { Random } = require("random-js");
const random = new Random();

/**
 * @param {Array} ranges
 */
exports.randomArray = (ranges) => {
  let result = [];

  for (let i = 0; i < ranges.length; i++) {
    const { size, start, end } = ranges[i];
    const rangeSet = new Set();

    while (true) {
      const number = random.integer(start, end);
      rangeSet.add(number);
      if (rangeSet.size === size) break;
    }

    result = [...result, ...[...rangeSet].sort((x1, x2) => x1 - x2)];
  }

  return result;
};
