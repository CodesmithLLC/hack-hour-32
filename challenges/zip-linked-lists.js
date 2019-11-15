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
  let l3 = new Node(null);
  let prev = l3;

  console.log(l3)

  let i = 0;
  l3.value = l1.value;
  while (l1 !== null && l2 !== null) {
    if (i % 2 === 0) {
      l3.next = l1;
      l1 = l1.next
    } else {
      l3.next = l2;
      l2 = l2.next
    }
    i += 1;
  }

  // prev = prev.next;

  // l1.next = l2;
  return l3
};

module.exports = {Node: Node, zip: zip};
