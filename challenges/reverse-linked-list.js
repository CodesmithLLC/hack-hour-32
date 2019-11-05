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

    //WE ARE GOING TO SWAP RECURSIVELY UNTIL THE MIDDLE NODE IS ITSELF OR ZERO AS BASE CASE
    //WE ARE SWAPPING POINTERS
    if(head===null){
        return;
    }
    if(head.next===null){
        return head; //already reversed in respect to itself
    }
    //each Node object only has a value and a next
    



    //return the recursivecall with the next
//O(2n)===O(n)
    let nodesArray=[]; //because now order matters
    //other option; trck the tail and its previous, but that is a lot fo pointers and elimantes the use of a LL
    //okay find we store the node references in an array, iterate and assign their next
    let currentNode=head;

    while(currentNode){
        nodesArray.push(currentNode);
        currentNode=currentNode.next;
    }

    console.log(nodesArray);

    //now iterate array and reassign the next
    head=nodesArray[nodesArray.length-1];//we can reassign head because we already stored the refs in an array of pointers
    currentNode=head; //reuse
    for(let i=nodesArray.length-1;i>=0;i--){
        if(i===0){
            console.log(currentNode);
            currentNode.value=nodesArray[i].value;
            currentNode.next=null;
            break;
        }
        currentNode=nodesArray[i]; //
        currentNode.next=nodesArray[i-1]; //going backwards rereferencings
    }




    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};


let ll=new Node(1);
ll.next=new Node(2);
ll.next.next=new Node(3);
ll.next.next.next=new Node(4);
console.log(reverseLinkedList(ll));