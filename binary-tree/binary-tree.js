// Prototypal

module.exports = BinaryTree;

function BinaryTree(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
}

var binaryTreeMethods = {
  height: function() {
    if (this.left === null && this.right === null) {
      return 1;
    }
    var leftHeight = this.left === null ? 0 : this.left.height();
    var rightHeight = this.right === null ? 0 : this.right.height();
    return Math.max(leftHeight, rightHeight) + 1;
  },
  isBalanced: function() {
    var leftHeight = this.left === null ? 0 : this.left.height();
    var rightHeight = this.right === null ? 0 : this.right.height();
    return Math.abs(leftHeight - rightHeight) <= 1;
  }
};
