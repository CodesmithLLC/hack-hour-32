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
  //obtain the value at the kth to last node
  //so if there are n nodes, we want the position n-k

  //going backwards and we do not have a tail pointer
  //our first try we must simply count until .next for k times is null(end of the test)
  if(head===undefined || head===null){
    return;
  }
  let currentNode=head;
  let n=0;
  while(currentNode!==null){
    currentNode=currentNode.next;
    n++;
  }
  ////let kBackNode; //may or may not exist in the node linked list
  currentNode=head;//reset
  let b=n-k;
  while(currentNode!==null && b>0)
  {
    currentNode=currentNode.next;
    b--;
  }
  if(b!==0){
    return;
  }
  else{
    return currentNode;
  }
}

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
