/*
Find the minimum element in a sorted array that's been rotated. Assume all array elements are unique.

Example of a rotated sorted array: [4,5,6,1,2,3]

Can use binary search for this problem. We are looking for the point where the array 'resets' to a lower value.

Using the sample array [4,5,6,1,2,3], we can look at the middle value - in this case we'll choose 1, since the
array is even length. Comparing it with the first element, we see that it's smaller. That means the min must be
in the first half.

This implementation keeps halving the space to look in until we're only considering 2 elements. Then it finds the min
of those three elements.

*/

var rotatedSortedArrayMin = module.exports = function(array) {
  var l = 0;
  var r = array.length-1;
  var mid = Math.floor((r-l)/2);

  if (array[l] < array[r]) return array[0];

  while(r-l >= 2) {
    if (array[r] < array[mid]) {
      l = mid;
    }
    else {
      r = mid;
    }
    mid = Math.floor((r-l)/2) + l;
  }
  return array[r] < array[l] ? array[r] : array[l];
};
