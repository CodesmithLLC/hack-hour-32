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
//input is head
//output is new head
//head.next = head
let oldHead = head;
let tracker = head;
let length = 0;
if (!head) return undefined;

    while(tracker === null){
        if (tracker){
            length+=1;
            tracker = tracker.next;
        }
    }
    for (let i=1; i<length; i++){
        tracker = oldHead;
        head.next = head;

    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
