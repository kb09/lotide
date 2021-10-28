// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

//findKetByValue

const findKetByValue = function (object, value){
  const arrayForKeys = object.keys(object);
  for (let i = 0; i < arrayOfKeys.length; i++) {

    if(object[arrayForKeys[i]] === value[i]) {
      return arrayForKeys;
    }

  }

}