/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

//Solution 1 - Iterative
// Time Complexity: O(n)
// Space Complexity: O(1)

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next;
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head = prev;
  return head;
}

// Solution 2 - Recursive
// Time complexity: O(n)
// Space complexity: O(1)
function reverseLinkedList(head) {
  if (!head || !head.next) return head;
  
  let h = head;
  let t = h.next;
  let end = reverseLinkedList(t);
  
  h.next.next = h;
  h.next = null;
  
  return end;
}