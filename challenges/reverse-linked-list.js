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
// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// a.next = b;
// b.next = c;
// c.next = d;

function reverseLinkedList(head) {
    // if no head/or 1 node only
    if (!head || head.next) return head;

    let node = head, previousNode, tempNext;

    while (node) {
        // save next
        tempNext = node.next;
        node.next = previousNode;
        previousNode = node;
        node = tempNext;
    }
    //console.log(`NEW HEAD AND LIST :`, previousNode.value, previousNode.next.value);
    return previousNode;
}

// test



//console.log(`reversed - `, reverseLinkedList(a)); // 4,3,2,1

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
