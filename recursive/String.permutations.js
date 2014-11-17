/*
Return all permutations of a string.

Takes a recursive approach - by thinking of the problem as the following:

The permutations of a string can be formed by:
  1. Take out the first char of the string.
  2. Get the permutations of the remaining string. (recursive step)
  3. Insert the first char into every position of every permutation from step 2.

The base case of recursion is when the string is 0 or 1 characters long. In that case,
the permutations are an array containing the string (which is either the empty string,
or a single character).
*/

;(function() {
  String.prototype.permutations = function() {
    if (this.length <= 1) return [this.valueOf()]; // this.valueOf() is required to convert the this object to a primitive value.
    var results = [];
    var char = this[0];
    var prevousPermutations = this.slice(1).permutations();
    prevousPermutations.forEach(function(perm) {
      for (var i = 0; i <= perm.length; i++) {
        results.push(perm.slice(0,i) + char + perm.slice(i));
      }
    });
    return results;
  };
})();
