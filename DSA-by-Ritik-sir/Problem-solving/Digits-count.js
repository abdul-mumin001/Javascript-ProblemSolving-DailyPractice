let num = 1234;
const digits = (num, count = 0) => {
  if (num) {
    return digits(Math.floor(num / 10), ++count);
  }
  return count;
};
console.log(digits(num));
console.log(digits(123456));
