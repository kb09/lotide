
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


const tail = function (arr) {
  if (arr === [] || arr.length === 1){
    return undefined;
  } else {
    return  arr.slice(1, arr.length)
  }
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(words.length, 2));
console.log(assertEqual(words[0], "Lighthouse"));
console.log(assertEqual(words[1], "Labs"));

console.log(assertEqual(words.length, 3));
