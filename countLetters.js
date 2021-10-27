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
  const result = [];

  for ( const index of string){
    if (index !== ''){
      if ( result[index]){
        result = result + 1;
      } 
}
 
console.log(countLetters('Does this include spaces'))