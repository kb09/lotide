

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

const head = function (array, index){
  if (array === []) {
    return undefined;
  } else {
  
  
   index = array[0];
   return index;
  }
}
// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

console.log(assertEqual(head([]), 5));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([]), 5));
