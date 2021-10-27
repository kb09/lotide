// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


// countLetters

const countLetters = function(string){

  string.replace(/\s/g,'')
  // const result = [];

  // for ( const index of string ){

  // }
}
 
console.log(countLetters('Does this include spaces'))