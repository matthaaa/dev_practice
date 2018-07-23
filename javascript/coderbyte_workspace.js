// multiply(5)(6)

function multiply (x) {
  return function (y) {
    return x * y;
  }
}
