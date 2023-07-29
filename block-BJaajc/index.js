function getFullName(firstName, LastName) {
  return firstName + " " + LastName;
}

function isPalindrome(value) {
  return value === value.split("").reverse().join("");
}

function getCircumfrence(radius) {
  return Math.floor(Math.PI * radius * 2);
}

function getArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
module.exports = { getFullName, isPalindrome, getCircumfrence, getArea };
