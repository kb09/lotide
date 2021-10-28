

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
  assertArraysEqual([1,2,3],[1,2,3])
  
  
  
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

// console.log(assertArraysEqual(results1));
console.log(results1)