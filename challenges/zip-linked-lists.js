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
  let l1marker = l1;
  let l2marker = l2;

  console.log('init');
  console.log('zipped:');
  console.log(zipped);
  let i = 1;

  while (current) {
    console.log(`ROUND ${i++} ---------------`)
    if (l1currentList) {
      console.log('current: l1');
      if (l1marker === null) {
        console.log('l1marker: null, returning zipped');
        return zipped;
      }
      console.log('appending current with l2');
      current.next = new Node(l2marker.val);
      l2marker = l2marker.next;
      console.log('zipped')
      console.log(zipped);
    } else {
      console.log('current: l2');
      if (l2marker === null) {
        console.log('l2marker: null, returning zipped');
        return zipped;
      }
      console.log('appending current with l1');
      console.log(l1marker);
      current.next = new Node(l1marker.val);
      l1marker = l1marker.next;
      console.log('zipped')
      console.log(zipped);
    }
    l1currentList = l1currentList ? false : true;
  }
}

module.exports = {Node: Node, zip: zip};
