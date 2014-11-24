Array.prototype.swap = function(i,j) {
  var temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

var insertionSort = module.exports = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i-1; j >= 0; j--) {
      if (array[j] > array[j+1]) {
        array.swap(j, j+1);
      }
    }
  }
  return array;
};
