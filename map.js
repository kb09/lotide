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
  

  
//map

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = words.map(function(word){
  return word[0];
} );



 assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
 assertArraysEqual(map(words, word => word.toUpperCase()), [ 'GROUND','CONTROL','TO','MAJOR','TOM' ]);
 assertArraysEqual(map(words, word => word + 1), ['ground1', 'control1', 'to1', 'major1', 'tom1']);
