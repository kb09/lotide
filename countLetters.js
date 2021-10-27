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
  
  result = {};

  for ( const index of string){
    if (index !== ''){
      if ( result[index]){
        result += 1;
      } else {
        result[index] = 1
      }
      
    }
  } return result;
}
 
console.log(countLetters("lighthouse in the house") )