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
  let current1 = l1;
  let current2 = l2;
  let trailing1 = l1;
  let trailing2 = l2;
  while (current1 !== null || current2 !==null) {
    current1 = current1.next;
    current2 = current2.next;
    trailing1.next = trailing2;
    trailing2.next = current1;
    trailing1 = current1;
    trailing2 = current2;
  }
};

module.exports = {Node: Node, zip: zip};
