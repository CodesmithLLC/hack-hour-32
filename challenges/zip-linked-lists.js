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

  let i = l1.head, j = l2.head;

  while (l1 && l2) {

    let temp1 = i.next;
    
    
  }
  
};

const a = new Node(1);
a.next = new Node(3);
a.next.next = new Node(5);

const b = new Node(2);
b.next = new Node(4);
b.next.next = new Node(6);

console.log(zip(a, b))

module.exports = { Node: Node, zip: zip };
