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
    let lead = head;
    let trailing1 = head;
    let trailing2 = head;
    if (lead.next === null) {
        return;
    }
    lead = lead.next;
    if (lead.next === null) {
        lead.next = trailing1;
        trailing1.next = null;
        head = lead;
        return;
    }
    trailing1 = lead
    lead = lead.next;
    trailing2.next = null
    while (lead.next.next !== null || lead.next !== null) {
        trailing1.next = trailing2;
        trailing2 = lead;
        lead = lead.next;
        trailing2.next = trailing1;
        trailing1 = lead;
        lead = lead.next;
    }
    trailing1.next = trailing2;
    trailing2 = lead;
    lead = lead.next;
    trailing2.next = trailing1;
    if (lead === null) {
        head = trailing2;
        return;
    }
        lead.next = trailing2;
        head = lead;
        return;
}



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
