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
    if (tree.left === null && tree.right === null) return true;
    if (tree.left === null) return validBST(tree.right);
    if (tree.right === null) return validBST(tree.left);
    if (tree.left.value > tree.value || tree.left.right ? (tree.left.right.value > tree.value) : false) return false;
    if (tree.right.value < tree.value || tree.right.left ? (tree.right.left.value < tree.value) : false) return false;
    return validBST(tree.left) && validBST(tree.right);
}


const Tree = new BinaryTree(8);
Tree.left = new BinaryTree(5);
Tree.right = new BinaryTree(19);
Tree.left.left = new BinaryTree(2);
Tree.left.right = new BinaryTree(6);
Tree.right.left = new BinaryTree(10);
Tree.right.right = new BinaryTree(25);
Tree.right.right.left = new BinaryTree(20);

// console.log(Tree);
console.log(validBST(Tree))

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
