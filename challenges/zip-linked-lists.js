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
  const newList = new Node(null);
  let previous = newList;
  while (l1 !== null && l2 !== null) {
    previous.next = l1;
    l1 = l1.next;
    previous = previous.next;
    previous.next = l2;
    l2 = l2.next;
  }
  if (l1.next === null) previous.next = l2;
  if (l2.next === null) previous.next = l1;
  return l3.next;
};

module.exports = {Node: Node, zip: zip};
