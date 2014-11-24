Array.prototype.swap = function(i,j) {
  var temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

var bubbleSort = module.exports = function(array) {
  for (var i = 0; i < array.length-1; i++) {
    for (var j = 0; j < array.length-1; j++) {
      if (array[j] > array[j+1]) {
        array.swap(j, j+1);
      }
    }
  }
  return array;
};
