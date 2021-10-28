//AssertEquals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

// TEST CODE
console.log(assertEqual("This is an identical string", "This is an identical string"));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(10, 30));
