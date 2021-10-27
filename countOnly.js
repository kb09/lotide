// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);

  } else {
    console.log(` ❌❌❌  Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

// countOnly

const countOnly = function(allItems, itemsToCount) {
  result=[];
  for ( let item in allItems){
    if ( allItems[item].incldes(itemsToCount)){
      return result.push(itemsToCount);
    } else {
      result[item];
    }
  }
  return result;
}