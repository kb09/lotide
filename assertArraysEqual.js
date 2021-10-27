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

// assertEqual 

const assertEqual = function (firstArray, secondArray) {
  const result = eqArrays ( firstArray, secondArray) 
    if ( !true ) {
      console.log (' false ')
    } else {
      console.log ( ' true ');
    }
  
}

// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));