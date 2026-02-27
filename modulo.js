function modulus(a, b) {
  if (b === 0) {
    return "Cannot perform modulus by zero";
  }
  return a % b;
}

module.exports = modulus;