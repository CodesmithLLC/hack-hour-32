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
  let l3
  let tail
  let pred
  l3 = new ListNode('')
  tail = l3
  while(l1 || l2) {
    if(l1 !== null) tail.val += l1.val
    if(l2 !== null) tail.val += l2.val
    tail.next = new ListNode('')
    pred = tail
    tail = tail.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  pred.next = null
  return l3
}


module.exports = {Node: Node, zip: zip};
