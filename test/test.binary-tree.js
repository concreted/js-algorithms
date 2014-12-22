var assert = require('chai').assert;
var BinaryTree = require('../binary-tree/binary-tree');

describe('Binary Tree', function() {
  var bt = null;
  beforeEach(function() {
    bt = BinaryTree(0);
  });
  it('should have left and right children', function() {
    assert.equal(bt.left, null, 'left should be initially null');
    assert.equal(bt.right, null, 'right should be initially null');
  });
  it('should have a height function', function() {
    assert.isFunction(bt.height, 'height should be a function');
  });
  it('should have height 1 when no children', function() {
    assert.equal(bt.height(), 1);
  });
  it('should have height 2 when 1 child', function() {
    bt.left = BinaryTree(2);
    assert.equal(bt.height(), 2);
  });
  it('should have height 2 when 2 children', function() {
    bt.left = BinaryTree(2);
    bt.right = BinaryTree(3);
    assert.equal(bt.height(), 2);
  });
  it('should have height 3 when left has 1 child', function() {
    bt.left = BinaryTree(2);
    bt.left.right = BinaryTree(3);
    assert.equal(bt.height(), 3);
  });
  it('should have height 3 when right has 1 child', function() {
    bt.right = BinaryTree(2);
    bt.right.right = BinaryTree(3);
    assert.equal(bt.height(), 3);
  });
  it('should be balanced when no children', function() {
    assert(bt.isBalanced());
  });
  it('should be balanced when 1 left child', function() {
    bt.left = BinaryTree(2);
    assert(bt.isBalanced());
  });
  it('should be balanced when 1 right child', function() {
    bt.right = BinaryTree(3);
    assert(bt.isBalanced());
  });
  it('should be balanced when left has 1 child and right has 0 children', function() {
    bt.left = BinaryTree(2);
    bt.right = BinaryTree(3);
    bt.left.left = BinaryTree(4);
    assert(bt.isBalanced());
  });
  it('should be unbalanced when left has height 3 and right has height 1', function() {
    bt.left = BinaryTree(2);
    bt.right = BinaryTree(3);
    bt.left.left = BinaryTree(4);
    bt.left.left.left = BinaryTree(5);
    assert(!bt.isBalanced());
  });
});
