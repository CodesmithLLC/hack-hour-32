/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {

}

const root = new BinaryTree(8);
const node1 = new BinaryTree(10);
const node2 = new BinaryTree(6);

const bt = new BinaryTree();
bt.
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
