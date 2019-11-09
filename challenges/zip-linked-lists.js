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
  // let node = new Node(l1)
  // console.log(node)
  // l1 = new Node(l1)
  // console.log(l1)
  // head.next = l2
  // console.log(head)
  let node1 = new Node(l1)
  console.log('node1 is', node1)
  let node2 = new Node(l2)
  console.log('node2 is', node2)
  node1.next = node2
  node2.next = node1
  





};

console.log(zip(1, 2))

module.exports = {Node: Node, zip: zip};
