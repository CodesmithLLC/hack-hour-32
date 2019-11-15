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
    let node = head, previous,
    tmp;
    while (node){
        tmp = node.next;
        node.next = previous;
        previous = node;
        node = tmp;
    }
    return previous;
}

function recursiveReverse(head){
    if(!head || !head.next){
        return head;
    }
    let tmp = recursiveReverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
