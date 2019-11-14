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

    let tr = tree.right;
    let tl = tree.left;

    if (tl === null && tr === null) return true;

    if (tl) {
        // if tree.left.value > tree.value
        if (tl.value > tree.value) return false;
        // if validBST(tl) returns false
        if (!validBST(tl)) return false;
    }
    if (tr) {
        // if tree.right.value < tree.value
        if (tr.value < tree.value) return false;
        if (!validBST(tr)) return false;
    }

    return true;

}



// let root = new BinaryTree(10)
// root.left = new BinaryTree(5)
// root.left.left = new BinaryTree(4);
// root.right = new BinaryTree(16)
// root.right.left = new BinaryTree(14)
// root.right.left.right = new BinaryTree(15)
// root.right.right = new BinaryTree(20)
// //console.log(root)
// console.log(validBST(root)) // expected - true, actual = true

// let root2 = new BinaryTree(10)
// root2.left = new BinaryTree(5)
// root2.left.left = new BinaryTree(4);
// root2.right = new BinaryTree(16)
// root2.right.left = new BinaryTree(14)
// root2.right.left.right = new BinaryTree(15)
// root2.right.right = new BinaryTree(0) // should be false
// console.log(validBST(root2))

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
