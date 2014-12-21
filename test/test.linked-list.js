var assert = require('chai').assert;
var makeLinkedList = require('../linked-list/linked-list');

function testLinkedList(expected, input, func, args) {
  var l = makeLinkedList();
  var result = [];
  input.forEach(function(value) {
    l.addToTail(value);
  });
  l = func.apply(null, [l].concat(args));
  l.each(function(value) {
    result.push(value);
  });
  assert.deepEqual(result, expected);
}

describe('removeKthFromLast', function() {
  var removeKthFromLast = require('../linked-list/remove-kth-from-last');
  it('should remove kth from last', function() {
    var l = makeLinkedList();

    testLinkedList([1,2,3,4,5], [1,2,3,4,5,6], removeKthFromLast, [0]);
    testLinkedList([1,2,4,5,6], [1,2,3,4,5,6], removeKthFromLast, [3]);
    testLinkedList([2,3,4,5,6], [1,2,3,4,5,6], removeKthFromLast, [5]);
  });
});

describe('removeDuplicates', function() {
  var rd = require('../linked-list/remove-duplicates');
  var removeDuplicates = rd.removeDuplicates;
  var removeDuplicatesNoStorage = rd.removeDuplicatesNoStorage;
  it('should remove duplicates',  function() {
    testLinkedList([1,2,3,4,5,6], [1,1,2,3,3,4,4,4,5,5,5,5,5,5,6,6,6], removeDuplicates);
  });
  it('should remove duplicates without extra buffer',  function() {
    testLinkedList([1,2,3,4,5,6], [1,1,2,3,3,4,4,4,5,5,5,5,5,5,6,6,6], removeDuplicatesNoStorage);
  });
});

describe('interleave', function() {
  var interleave = require('../linked-list/interleave');
  it('should interleave', function() {
    testLinkedList([1,4,2,5,3,6], [1,2,3,4,5,6], interleave);
  });
});

describe('Linked List', function() {
  var l = null;
  beforeEach(function() {
    l = makeLinkedList();
  });
  it('should have methods', function() {
    assert.isFunction(l.insertHead);
    assert.isFunction(l.addToTail);
    assert.isFunction(l.remove);
    assert.isFunction(l.size);
  });
  it('should have null head and tail when created', function() {
    assert(l.head === null);
    assert(l.tail === null);
  });
  it('should add to tail', function() {
    l.addToTail(1);
    assert(l.head.value === 1);
    assert(l.tail.value === 1);
    l.addToTail(2);
    assert(l.head.value === 1);
    assert(l.tail.value === 2);
  });
  it('should insert head', function() {
    l.insertHead(1);
    assert(l.head.value === 1, 'head is 1');
    assert.equal(l.tail.value, 1, 'tail is 1');
    l.insertHead(2);
    assert(l.head.value === 2, 'head is 2');
    assert(l.tail.value === 1, 'tail is 1 after');
  });
  it('should return size', function() {
    l.insertHead(2);
    l.insertHead(1);
    l.addToTail(3);
    assert.equal(3, l.size());
  });
  it('should remove', function() {
    l.insertHead(2);
    l.insertHead(1);
    l.addToTail(3);
    l.remove(2);
    assert(l.head.value === 1, 'head is 1');
    assert(l.head.next.value === 3, 'head.next is 3');
    assert(l.size() === 2, 'size is now 2');
  });
  it('should remove from list of size 1', function() {
    l.insertHead(1);
    assert.equal(l.size(), 1);
    l.remove(1);
    assert.equal(l.size(), 0);
  });
});
