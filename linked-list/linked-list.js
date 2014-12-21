module.exports = makeLinkedList;

function makeNode(value) {
  var node = {
    value: value,
    next: null
  };
  return node;
}

function makeLinkedList() {
  var linkedList = {
    head: null,
    tail: null,
    insertHead: function(value) {
      var newHead = makeNode(value);
      if (this.head === null && this.tail === null) {
        this.head = newHead;
        this.tail = newHead;
      }
      else {
        newHead.next = this.head;
        this.head = newHead;
      }
    },
    addToTail: function(value) {
      var newTail = makeNode(value);
      if (this.head === null && this.tail === null) {
        this.head = newTail;
        this.tail = newTail;
      }
      else {
        this.tail.next = newTail;
        this.tail = newTail;
      }
    },
    remove: function(value) {
      // Iterate through list searching for the value.
      // When found, set the previous node's next pointer
      // to the node after the value.
      var currentNode = this.head;

      while(currentNode !== null) {
        // Handles if first element matches value
        if (currentNode.value === value) {
          this.head = currentNode.next;
          if (this.head === null) {
            this.tail = null;
          }
        }
        else if (currentNode.next !== null && currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
      }
    },
    size: function() {
      var count = 0;
      this.each(function() {
        count++;
      });
      return count;
    },
    each: function(callback) {
      var currentNode = this.head;
      while (currentNode !== null) {
        callback(currentNode.value, currentNode);
        currentNode = currentNode.next;
      }
    }
  };
  return linkedList;
}
