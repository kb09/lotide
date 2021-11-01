//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


// countindexs

const countLetters = function (string) {
  const result = {};

  for (const index of string) {
  if (index !== " ") { 
    if (result[index]) {
      result[index] += 1; 
    } else {
      result[index] = 1;
    }
  }
}
  return result;
}

 
console.log(countLetters("lighthouse in the house") )