const {eqArrays} = require("./eqArrays");

// assertArraysEqual

const assertArraysEqual = function (arrayOne, arrayTwo) {
    if ( !eqArrays(arrayOne, arrayTwo)) {
      console.log ( ` ❌❌❌  Assertion Failed: ${arrayOne}  !==  ${arrayTwo}` )
    } else {
      console.log ( ` ✅✅✅  Assertion Passed: ${arrayOne} ===  ${arrayTwo}`);
    }
   }
  

module.exports = {assertArraysEqual};
  