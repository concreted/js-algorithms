/*

Write a function that will remove duplicates from an unsorted linked list.

What if a temporary buffer is not allowed?

*/

var makeLinkedList = require('./linked-list');

module.exports = {
  removeDuplicates: removeDuplicates,
  removeDuplicatesNoStorage: removeDuplicatesNoStorage
};

function removeDuplicates(l) {
  // With extra buffer - use a hash table
  var unique = {};
  var newList = makeLinkedList();
  l.each(function(value) {
    if (unique[value] === undefined) {
      newList.addToTail(value);
      unique[value] = 1;
    }
  });
  return newList;
}

function removeDuplicatesNoStorage(l) {
  // For each node, check whether there is a duplicate in the rest
  // of the list. If so, set the previous node's next to the duplicate's next.
  function removeDuplicatesAfter(node) {
    var value = node.value;
    var currentNode = node;
    while (currentNode !== null) {
      if (currentNode.next !== null && currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }
  l.each(function(value, node) {
    removeDuplicatesAfter(node);
  });
  return l;
}
