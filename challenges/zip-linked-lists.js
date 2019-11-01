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
// function LinkedList(){
//   this.head = null;
//   this.tail = null;
// }

function zip(l1, l2) {
  // const l1 = new Node(val)
  // const l2 = new Node(val)
  let current = l1.next;
  current = head;
  if (current === null){
    current = l2;
    l2 = tail;
  }else if (current){
    current = current.next;
    let newL1 = l1;
    current = newL1;
    newL1 = tail;
  }
};

module.exports = {Node: Node, zip: zip};
