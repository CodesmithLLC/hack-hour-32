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
    let arr = [];
    helper(tree, arr);
    console.log(arr);
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1])
        return false;
    }
    return true; 
}

function helper(tree, arr){
    if(!tree) return ;
    helper(tree.left, arr);
    arr.push(tree.value);
    helper(tree.right, arr);
    return;
}
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
