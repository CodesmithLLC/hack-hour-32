/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let zipped;
  let currentl1 = l1.head;
  let currentl2 = l2.head;
  let currentZipped;

  if (currentl2) {
    zipped.head = currentl1;
    currentZipped = zipped.head;
    currentl1 = currentl1.next;
    currentZipped.next = currentl2;
    currentZipped = currentZipped.next;
    currentl2 = currentl2.next;
  }
  return zipped;
}

module.exports = { Node: Node, zip: zip };
