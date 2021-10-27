// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


const eqArrays = function (arrayOne, arrayTwo) {
  if ( arrayOne.length === arrayTwo.length){
    if (arrayOne[0] === arrayTwo [0]) {
      return true;
    } else {
      return false;
    }
  }
}


// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));