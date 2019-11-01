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
  current_l1 = l1;
  current_l2 = l2;
  next_l1 = l1;
  next_l2 = l2;
  while(current_l1.value != null && current_l2 != null){
    next_l1 = next_l1.next;
    next_l2 = next_l2.next;
    current_l1.next =next_l1;
    current_l2.next = next_l2;
    currrent_l1 = next_l1;
    current_l2= next_l2
  }
  
};

module.exports = {Node: Node, zip: zip};
