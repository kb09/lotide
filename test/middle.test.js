const {middle} =require('../middle')
const assert = require('chai').assert;



describe("#middle", () => {

  it("returns [ 2 ] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2] ); // ask why it doesn't work if [2] is put as 2 without brackets
  });

  it("returns [ 8 ] for [1, 8, 5]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2] ); // ask why it doesn't work if [2] is put as 2 without brackets
  });

  it("returns [ 2,3 ] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2] ); // ask why it doesn't work if [2] is put as 2 without brackets
  });

  it("returns [ 5,8 ] for [2, 5, 8, 8]", () => {
    assert.deepEqual(middle([2, 5, 8, 8]), [5,8] ); // ask why it doesn't work if [2] is put as 2 without brackets
  });

}


)