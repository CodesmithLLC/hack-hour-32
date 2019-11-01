/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let first = new Node(),
    sec = new Node();
  let i = 0;


  const merged = [];

  while (first && sec) {
    merged.push(first)
    merged.push(sec);
    i++;

    first.value = l1[i];
    sec.value = l2[i];

    first.next = sec;
    sec.next = first;
    // console.log(`i `, first)
    // console.log(`j `, sec)
  }
  return merged;
};

// const a = [1, 3, 5, 7];
// const b = [2, 4, 6, 8];
// console.log(zip(a, b))

module.exports = { Node: Node, zip: zip };
