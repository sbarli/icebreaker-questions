// min & max are both INCLUSIVE
export const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * EXAMPLES
 */
// console.log('getRandomIntegerInclusive(0, 1)',getRandomIntegerInclusive(0, 1));
