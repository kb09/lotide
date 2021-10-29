
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

const findKey = function(object, callback){
  const result = [];
  for(let index of object){
      if (!callback){
        result.push[i];
      
      }else { return result;
        
      }
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )// => "noma"
}