
// assertEqual

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};


//eqArrays

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length){
    return false;
  } 
  for ( let i in arrayOne) {
    if ( arrayOne[i] !== arrayTwo[i]) {
      return false;
    }

  } return true;
  
}

// assertArraysEqual

const assertArraysEqual = function (arrayOne, arrayTwo) {
    if ( !eqArrays(arrayOne, arrayTwo)) {
      console.log ( ` ❌❌❌  Assertion Failed: ${arrayOne}  !==  ${arrayTwo}` )
    } else {
      console.log ( ` ✅✅✅  Assertion Passed: ${arrayOne} ===  ${arrayTwo}`);
    }
   }


   //findKey
   
   const findKey = function(array, callback) {
    let result = [];
    for (let index of array) {
      if (callback[index]) {
        result.push(index);
      } else{
        return result;
      }
    }
  }