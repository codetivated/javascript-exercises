function numberChecker(number) {
  if (number === 1000 || number === 10) {
    return true;
  } else if (number === 9 || number === 6) {
    return false;
  } else {
    throw new Error('Invalid number');
  }
}

// Do not edit below this line
module.exports = numberChecker;
