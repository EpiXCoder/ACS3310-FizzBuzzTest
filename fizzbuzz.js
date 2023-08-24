const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzbuzz'

/** 
 * Returns true when n is divisible by given number
 * @param {Number} n
 * @returns {Boolean} fizziness 
 * */
function isFizzy(n, fizzOn) {
  return n % fizzOn === 0;
}

/**
 * Returns true when n is divisible by given number
 * @param {Number} n 
 * @returns {Boolean} buzziness
 */
function isBuzzy(n, buzzOn) {
  return n % buzzOn === 0;
}

/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by given two numbers above, or both
 * @param {Number} n
 * @returns {String} '', 'FIZZ', 'BUZZ', or 'FIZZBUZZ'
 */
function fizzyBuzzy(n, fizzOn, buzzOn) {
  if (isFizzy(n, fizzOn) && isBuzzy(n, buzzOn)) return FIZZBUZZ;
  if (isFizzy(n, fizzOn)) return FIZZ;
  if (isBuzzy(n, buzzOn)) return BUZZ;
  return '';
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count 
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
function fizzBuzz(count, fizzOn = 3, buzzOn = 5) {
  let result = { count, fizz: 0, buzz: 0, fizzBuzz: 0 };

  for (let i = 1; i <= count; i++) {
    if (isFizzy(i, fizzOn) && isBuzzy(i, buzzOn)) {
      result.fizzBuzz += 1;
    } else if (isFizzy(i, fizzOn)) {
      result.fizz += 1;
    } else if (isBuzzy(i, buzzOn)) {
      result.buzz += 1;
    }
  }

  return result;
}

module.exports.isFizzy = isFizzy
module.exports.isBuzzy = isBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz
module.exports.FIZZ = FIZZ
module.exports.BUZZ = BUZZ
module.exports.FIZZBUZZ = FIZZBUZZ

