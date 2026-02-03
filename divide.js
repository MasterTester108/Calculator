function divide(a, b) {
  if (parseFloat(b) === 0) {  // bug 4567 - done fix to handle decimal values
    return "Cannot divide by zero";
  }
  return parseFloat(a) / parseFloat(b);
}

module.exports = divide;
