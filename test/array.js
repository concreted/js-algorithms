var assert = require('chai').assert;

describe('Rotated arrays', function() {
  var rotatedSortedArrayMin = require('../array/rotatedSortedArrayMin');
  it('should find the index of the minimum element in a rotated sorted array', function() {
    assert.equal(1, rotatedSortedArrayMin([6,1,2,3,4,5]));
    assert.equal(1, rotatedSortedArrayMin([4,5,1,2,3]));
    assert.equal(1, rotatedSortedArrayMin([3,4,5,6,1,2]));
    assert.equal(1, rotatedSortedArrayMin([1,2,3,4,5]));
    assert.equal(1, rotatedSortedArrayMin([2,3,4,5,1]));
  });
});
