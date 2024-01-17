const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } = require('./project');

test('returns the string with first char capitalized', () => {
  expect(capitalize('ricardo')).toBe('Ricardo');
})

test('returns reverse string', () => {
  expect(reverseString('ricardo')).toBe('odracir');
})

test('return correct products', () => {
  const calc = new Calculator();
  expect(calc.add(2, 2)).toBe(4);
  expect(calc.subtract(2, 2)).toBe(0);
  expect(calc.multiply(4, 4)).toBe(16);
  expect(calc.divide(8, 2)).toBe(4);
});

test("works with single letters", () => {
  expect(caesarCipher("G", 1)).toBe("H");
});

test("works with words", () => {
  expect(caesarCipher("Fcjjm", 2)).toBe("Hello");
});

test("works with phrases with punctuation", () => {
  expect(caesarCipher("Czggj, rjmgy!", 5)).toBe("Hello, world!");
});

test("works with negative shift factors", () => {
  expect(caesarCipher("Jgnnq", -2)).toBe("Hello");
});

test("works when shifting past the end of the alphabet", () => {
  expect(caesarCipher("Hzcwo", 15)).toBe("World");
});

test('Basic list', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
  })
})

test('Negative number', () => {
  expect(analyzeArray([1,-8,3,-4,2,6])).toEqual({
      average: 0,
      min: -8,
      max: 6,
      length: 6
  })
})

test('Empty list', () => {
  expect(analyzeArray([])).toEqual({});
});