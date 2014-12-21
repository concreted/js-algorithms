/*
Given an even-length linked list, take the first half and interleave it with the second half.

For example:

a->a->a->b->b->b->

becomes

a->b->a->b->a->b->

*/

module.exports = interleave;

function interleave(linkedList) {
  // To find the midpoint of the list,
  // start from the beginning with two pointers.
  // Move one pointer one place at a time,
  // and the other two places at a time.
  // When the fast pointer reaches null,
  // the slow pointer will be at midpoint.
  var p1 = linkedList.head;
  var p2 = linkedList.head;
  while (p1 !== null) {
    p1 = p1.next.next;
    p2 = p2.next;
  }

  // Set the fast pointer back to the head.
  // Then iterate through, placing each node from p2
  // after p1.
  p1 = linkedList.head;
  while(p2 !== null) {
    var nextp1 = p1.next;
    var nextp2 = p2.next;
    p1.next = p2;
    if (p2.next !== null) {
      p2.next = nextp1;
    }
    p1 = nextp1;
    p2 = nextp2;
  }
  return linkedList;
}
