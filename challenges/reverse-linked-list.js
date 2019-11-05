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
    if(head.next == null ){
      return head;
    }
    if(head == null){
        return undefined;
    }
    let tmp = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
