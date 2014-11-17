require('underscore');
var assert = require('chai').assert;

describe('String permutations', function() {
  var setEqual = null;
  before(function() {
    require('../recursive/String.permutations');
    setEqual = function(setA, setB) {
      if (setA.length !== setB.length) return false;
      for (var i = 0; i < setA.length; i++) {
        if (setB.indexOf(setA[i]) < 0) return false;
      }
      return true;
    };
  });
  it('should have String.permutations as a function', function() {
    assert.isFunction(String.prototype.permutations);
  });
  it('should return permutations for a given string', function() {
    assert(setEqual('a'.permutations(), ['a']));
    assert(setEqual('ab'.permutations(), ['ab', 'ba']));
    assert(setEqual('abc'.permutations(), [ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]));
  });
});
