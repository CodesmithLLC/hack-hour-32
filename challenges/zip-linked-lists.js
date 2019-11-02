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
  console.log(a);
  console.log(b);
  while(l1 && l2) {
    // need a temp node to hold the value of the second node in l1
    let temp = new
    l1.next = l2.value;
    
    l2.next = l1.next.next;
  }
};

// create the new linked lists

let a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);
a.next.next.next = new Node(20);

let b = new Node (2);
b.next = new Node (4);
b.next.next = new Node (6);

// what we want --> 5 -> 2 -> 10 -> 4 -> 15 -> 6;

console.log(zip(a, b));



module.exports = {Node: Node, zip: zip};
