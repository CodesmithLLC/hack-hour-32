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
    // this.length = 0
}

let result = []

function reverseLinkedList(head) {
    let node = new Node(head)
    // let 
    result.push(node)
    console.log(result);
    if (result.length > 1) {
        for (let i = result.length - 1; i > 0; i--) {
            console.log(i)
            console.log(result[i])
            console.log(result[i]-1)
            result[i].next = result[i-1]
            // console.log(result[i].next)
        }
    }



    





    return result[result.length-1]



}

console.log(reverseLinkedList(1))
console.log(reverseLinkedList(2))
console.log(reverseLinkedList(3))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
