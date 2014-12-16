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

describe('Bubble Sort', function() {
  var bubbleSort = require('../array/bubbleSort');
  it('should sort using bubble sort', function() {
    assert.deepEqual(bubbleSort([4,3,2,1]), [1,2,3,4]);
    assert.deepEqual(bubbleSort([1,2,3,4]), [1,2,3,4]);
    assert.deepEqual(bubbleSort([3,2,5,7,4,1,6,8,9]), [1,2,3,4,5,6,7,8,9]);
  });
});

describe('Insertion Sort', function() {
  var insertionSort = require('../array/insertionSort');
  it('should sort using insertion sort', function() {
    assert.deepEqual(insertionSort([4,3,2,1]), [1,2,3,4]);
    assert.deepEqual(insertionSort([1,2,3,4]), [1,2,3,4]);
    assert.deepEqual(insertionSort([3,2,5,7,4,1,6,8,9]), [1,2,3,4,5,6,7,8,9]);
  });
});

describe('isRotation', function() {
  var isRotation = require('../array/isRotation');
  it('should find rotations', function() {
    assert(isRotation('waterbottle', 'erbottlewat'));
    assert(!isRotation('waterbottl', 'erbottlewat'));
    assert(isRotation('erbottlewat', 'waterbottle'));
  });
});
