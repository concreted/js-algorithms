module.exports = removeKthFromLast;

function removeKthFromLast(l, k) {
  // Get the size.
  var current = l.head;
  var size = l.size();
  // if removing the first element:
  if (k === size-1) {
    l.head = l.head.next;
  }

  for (var i = l.size()-1; i > k+1; i--) {
    current = current.next;
  }
  current.next = current.next.next;
  if (k === 0) {
    l.tail = current;
  }
  return l;
}

var makeLinkedList = require('./linked-list');
var l = makeLinkedList();
l.addToTail(1);
l.addToTail(2);
l.addToTail(3);
l.addToTail(4);
l.addToTail(5);
l.addToTail(6);
// console.log(l.size());
removeKthFromLast(l, 0);
console.log(JSON.stringify(l));
