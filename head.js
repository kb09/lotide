

const head = function (array, index){
  if (array === []) {
    return undefined;
  } else {
    index = array[0];
   return index;
  }
}

module.exports = {head}