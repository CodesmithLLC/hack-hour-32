/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 *
 * BONUS: Do this in place
 */

 // The overall strategy is to "concatonate" L2 onto L1.  

function zip (l1, l2) {
  // if either parameter is left undefined, return the other list. 
  if (!l1) return l2;
  if (!l2) return l1;

  // initiate a head - this is what we'll return at the end, so it starts with L1
  // initiate a temp - this is going to be our placeholder for L1 as we traverse. 
  let head = l1;
  let temp = l1;
  
  // Since HEAD has the value of L1 already, we set the value of L1 to L1.NEXT
  l1 = l1.next;
  
  // Initiate a WHILE loop that checks to see if L2 && L1 (which again, is L1.NEXT) are ever falsey.
  while (l2 && l1) {
// console.log(`HEAD is `, head);
  // console.log(`temp is `, temp, ' l1 is ', l1, ' and l2 is ', l2)
    temp.next = l2;
    l2 = l2.next;
    temp = temp.next;
    temp.next = l1;
    l1 = l1.next;
    temp = temp.next;
  }
  
  temp.next = l2 ? l2 : l1;
  return head;
}

// Recursive
function zip2 (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  
  let curr = new Node(l1.value);
  curr.next = zip2(l2, l1.next);
  return curr;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

const x = new Node(4);
const y = new Node(5);
const z = new Node(6);

a.next = b;
b.next = c;
x.next = y;
y.next = z;


console.log(zip(a,x));
// console.log(a.next.next.next.next.next);