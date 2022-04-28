const { NotImplementedError } = require('../extensions/index.js');

function isHex(num) {
  let match = num.match(/[0-9a-f]+$/i)
  return Boolean(match) && match[0].length == 2
}

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let splitted = n.split('-')
  if (splitted.length != 6) { return false }
  let result = true
  splitted.map(el => result &= el.length == 2 && isHex(el))
  return Boolean(result)
}

module.exports = {
  isMAC48Address
};
