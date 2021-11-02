
const assert = require('chai').assert;
const {tail} =require('../tail')




describe("#tail", () => {
  it("returns [2,3,4] for [1, 2, 3,4]", () => {
    assert.deepEqual(tail([1, 2, 3,4]), [2, 3,4]);
  });

  it('returns "["Lighthouse", "Labs"]" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2 ]), [2]);
  });

  it("returns [4,52.7,9,8,6,56,4] for [1,4,52.7,9,8,6,56,4]", () => {
    assert.deepEqual(tail([1,4,52.7,9,8,6,56,4]), [4,52.7,9,8,6,56,4]);
  });
} );

