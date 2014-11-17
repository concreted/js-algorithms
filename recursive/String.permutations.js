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
