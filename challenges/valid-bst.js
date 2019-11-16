/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function validBST(tree, min = NUMBER.NEGATIVE_INFINITY, max = NUMBER.POSITIVE_INFINITY) {

  if (tree.value === null) return true;

  if (tree.value > min && 
	  tree.value < max && 
	  validBST(tree.left, min, tree.value) &&
	  validBST(tree.right, tree.value, max)) 
    {
	  return true
	} else {
	  return false
	}
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
