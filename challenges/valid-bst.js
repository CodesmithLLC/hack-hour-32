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
  // if this.left is greater than value or this.right is left than value, return false;
  // otherwise, keep checking each node
  let leftBranch = (tree.left);
  let rightBranch = (tree.right);
  if (leftBranch.value > tree.value) return false;
  else if (rightBranch.value < tree.value) return false;
  else if (leftBranch.value < tree.value) validBST(tree.left);
  else if (rightBranch.value > tree.value) validBST(tree.right)
  return true;
}

BinaryTree.prototype.add = function(value) {
  const branch = new BinaryTree(value);
  if (value > this.value && this.right == null) {
    this.right = branch;
  } 
  else if (value < this.value && this.left == null) {
    this.left = branch;
  }
  else if (value > this.value && this.right) {
    this.right.add(value);
  } 
  else if (value < this.value && this.left) {
    this.left.add(value);
  }
};


let test = new BinaryTree(4);
test.add(3)
test.add(5)
test.add(2)
test.add(6)
console.log(test)

console.log(test.right)
console.log(test.right.value)
console.log(test.left);
console.log(test.value)
console.log(validBST(test))


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
