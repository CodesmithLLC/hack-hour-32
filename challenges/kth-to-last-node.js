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
//input number 
const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(k, head) {
//   let count = 0;
//   let current = head
//   let cur = head
//   // let newCur = 
//   while(current !== null){
//   if (current){
//     current = current.next
//     count++
//   }
// }
// // console.log(count)
// current = head
//   for(let i=0; i<count-k; i++){
//     current = current.next
//   }
//   return current.value
// }

//Object
function kthToLastNode(k, head) {
  let count = 0;
  let obj ={};
  let current = head
  // let cur = head
  // let newCur = 
  while(current !== null){
  if (current){
    obj[count] = current.value;
    current = current.next
    count++
  }
  return obj[count-k]
}
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log(kthToLastNode(2, a))
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
