
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
      console.log (' Arrays are not the same ')
    } else {
      console.log ( ' Arrays are the same');
    }
   }
  
  // without

  const without = function(source, itemsToRemove) {
    for (let i in source) {
      for (let i in itemsToRemove) {
        if (source[i] === itemsToRemove[i]) {
          source.splice(i, 1);
        }
      }
      return source;
    }
  }
  console.log(without([1, 2, 3], [1]));
  console.log(without(["1", "2", "3"], [1, 2, "3"]))
   