// FUNCTION IMPLEMENTATION
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


//eqObjects

// Returns true if both objects have identical keys with identical keys.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let arrayForKeys1 = Object.keys(object1);
  let otherKeyArray = Object.keys(object2);
  if (arrayForKeys1.length !== otherKeyArray.length) {
    return false;
  }
  for (const key of arrayForKeys1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  console.log(assertEqual(eqObjects(cd, dc))); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(assertEqual(eqObjects(cd, cd2))); // => false



  
  //asserObjectsEqual 


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};