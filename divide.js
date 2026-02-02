function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// bug 1234 - displaying result of division
console.log(divide(10, 2));
module.exports = divide;
