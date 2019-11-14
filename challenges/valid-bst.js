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
    // if a right or left node exist and the current node's value is greater than right node's value or less than left node's value, return false
    if (this.right && this.value > this.right.value) return false;
    if (this.left && this.value < this.left.value) return false;

    if (this.right) {
        return validBST(this.right);
    } else if (this.left) {
        return validBST(this.left);
    }

    return true;
    // if this.right or this.left exist, continue traversing and call BST on existing node, otherwise we've reached the end and it's valid
    // return (this.right || this.left) ? validBST(this.right) || validBST(this.left) : true
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
