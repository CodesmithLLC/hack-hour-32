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

function reverseLinkedList(head) {
    if(!head) return null;
    if(head.next === null) return head;
    let prev = head;
    let current = head.next;
    let next = head.next.next;
    prev.next = null;
    while(current !== null){
        current.next = prev;
        prev = current;
        current = next; 
        if(next !== null) next = next.next;
    }
    return prev;
}

// let a = new Node(1);
// a.next = new Node(2);
// a.next.next = new Node(3);
// a.next.next.next = new Node(2);

// for(let i = reverseLinkedList(a.next.next.next); i !== null; i = i.next){
//     console.log(i.value);
// }
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
