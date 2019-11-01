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
  const zippedNode = new Node(l1.value);
  // console.log(zippedNode)
  let pointerZip = zippedNode;
  let pointerL1 = l1.next;
  let pointerL2 = l2;
  // console.log(pointerL1)
  while (pointerL1 || pointerL2) {
    if (pointerL2) {
      pointerZip.next = pointerL2;
      pointerL2 = pointerL2.next;
      pointerZip = pointerZip.next;
    }
    if (pointerL1) {
      pointerZip.next = pointerL1;
      pointerL1 = pointerL1.next;
      pointerZip = pointerZip.next;
    }
  }
  // console.log(zippedNode);
  return zippedNode;
};


const link1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    }
  }
}

const link2 = {
  value: 4,
  next: {
    value: 5,
    next: {
      value: 6,
      next: null,
    }
  }
}






console.log(zip(link1, link2));

module.exports = {Node: Node, zip: zip};
