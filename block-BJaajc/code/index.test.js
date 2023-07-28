const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require("./index");

test("fullName is", () => {
  expect(getFullName("aman", "arora")).toBe("aman arora");
});

test("palindrom test check", () => {
  expect(isPalindrome("madam")).toBe("true");
});

test("circumfrence of circle is ", () => {
  expect(getCircumfrence(2)).toBe(12);
});

test("Area of circle is ", () => {
  expect(getArea(3)).toBe(28);
});
