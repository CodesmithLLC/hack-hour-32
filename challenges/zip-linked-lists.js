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

	if (!l1) { return l2 }
  if (!l2) { return l1 }

  let zipped = new Node(l1.val);
  let current = zipped;
  let l1currentList = true;
  let l1marker = l1.next;
  let l2marker = l2;

  while (current) {
    if (l1currentList && l2marker !== null) {
      current.next = new Node(l2marker.val);
      l2marker = l2marker.next;
    } else {
      if (l1marker !== null) {
      current.next = new Node(l1marker.val);
      l1marker = l1marker.next;
      }
    }
    current = current.next;
    l1currentList = l1currentList ? false : true;
  }

  displayZipped(zipped);
  return zipped;
}

module.exports = {Node: Node, zip: zip};
