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
  // 2 Loop version
  //
  let length = 0;
  let nodeRunner = head;
  if (k <= 0 || !k || !head) return undefined;
  while (nodeRunner !== null) {
    length++;
    nodeRunner = nodeRunner.next;
  }
  // console.log(length);
  const kthPoint = length - k;
  let resultValue;
  nodeRunner = head;
  for (let i = 0; i <= kthPoint; i++) {
    if (i === kthPoint) resultValue = nodeRunner.value;
    nodeRunner = nodeRunner.next;
  }
  return resultValue;
  //
  // Cache version
  //
  // const cache = {};
  // let nodeRunner = head;
  // let length = 0;
  // if (k <= 0 || !k || !head) return undefined;
  // while (nodeRunner !== null) {
  //   cache[length] = nodeRunner.value;
  //   nodeRunner = nodeRunner.next;
  //   length++;
  // }
  // return cache[length - k];
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

console.log(kthToLastNode(2, a));
console.log(kthToLastNode(3, a));
console.log(kthToLastNode(1, a));
console.log(kthToLastNode(4, a));
console.log(kthToLastNode(5, a));
console.log(kthToLastNode(0, a));
console.log(kthToLastNode(8, a));
console.log(kthToLastNode(a));
console.log(kthToLastNode());

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
