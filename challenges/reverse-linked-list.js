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
    // traverse through the whole linked list --> pushing all the values to an array --> rebuild a linkedlist from the back of the array to the front
    const valuesArr = [];
    while (head.next) {
        valuesArr.push(head.value);
        this = this.next;
    }
    // function should return the new head of the list
    console.log(valuesArr);
}

let a = new Node (3);
a.next = new Node (2);
a.next.next = new Node (1);
console.log(a);

console.log(reverseLinkedList()); 
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
