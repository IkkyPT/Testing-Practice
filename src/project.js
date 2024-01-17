function capitalize(string) {
  const firstChar = string.charAt(0);
  return string.replace(firstChar, firstChar.toUpperCase());
}

function reverseString(string) {
  let newString = "";

  for(let i = string.length; i >= 0; i--) {
    const givenChar = string.charAt(i);
    newString = newString.concat(givenChar);
  }

  return newString;
}

class Calculator {
  constructor() {
    add = this.add;
    subtract = this.subtract;
    multiply = this.multiply;
    divide = this.divide;
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num2 - num1;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

function caesarCipher(string, shift) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      newString += String.fromCharCode(
        ((charCode - 65 + shift + 26) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      newString += String.fromCharCode(
        ((charCode - 97 + shift + 26) % 26) + 97
      );
    } else {
      newString += char;
    }
  }
  return newString;
}


function analyzeArray(array) {
  if (array && array.length > 0) {
    return {
      average: average(array),
      min: min(array),
      max: max(array),
      length: length(array)
    };
  }

  return {};

  function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  function min(array) {
    return Math.min(...array);
  }

  function max(array) {
    return Math.max(...array);
  }

  function length(array) {
    return array.length;
  }
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };