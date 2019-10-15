/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //end - k, return that node
  const values = [head.value]; //create an array to store the values of the arrays. we will loop through the remainig nodes to store their values
  let nextNode = head.next; //creates the link 
  while (nextNode) { //while the next node exists
    values.push(nextNode.value);
    nextNode = nextNode.next;
  }
  return values[values.length - k] //return the value associated with values[i]
                //^this is the count (basically length of the nodes as stored in the values array)
}


  // Write a function that takes two parameters, an integer and the head of a
  // singly linked list, and returns the VALUE on the kth to last node in the list.
 
  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
  console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)

  module.exports = {Node: Node, kthToLastNode: kthToLastNode};

