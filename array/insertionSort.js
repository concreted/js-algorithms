Array.prototype.swap = function(i,j) {
  var temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i-1; j >= 0; j--) {
      if (array[j] > array[j+1]) {
        array.swap(j, j+1);
      }
    }
  }
  return array;
}

console.log(insertionSort([4,3,2,1]));
console.log(insertionSort([1,2,3,4]));
console.log(insertionSort([3,2,5,7,4,2,5,8,9]));
