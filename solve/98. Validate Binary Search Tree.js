/*Given a binary tree, determine if it is a valid binary search tree (BST).

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.
 Example 1:
 2
 / \
 1   3
 Binary tree [2,1,3], return true.
 Example 2:
 1
 / \
 2   3
 Binary tree [1,2,3], return false.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  /**
   *
   * @param node
   * @param minBound the minimum boundary
   * @param maxBound the maximum boundary
   * @returns {boolean}
   */
  function checkIfNodeIsBST(node, minBound, maxBound) {
    if (node === null) {
      return true;
    }

    if (node.val >= maxBound || node.val <= minBound) {
      return false;
    }

    //
    //           3                             (-Infinity, Infinity)
    //        /    \
    //       1       5               (-Infinity, 3)            (3, Infinity)
    //      / \     / \
    //     0   2   4   6         (-Infinity, 1) (1, 3)      (3, 5)  (5, Infinity)
    //          \
    //           3                                  (2, 3)
    //

    //for left node, it's value should be bigger than minBound, and smaller than current node

    //for right node, it's value should be bigger than current node, and smaller than maxBound

    return checkIfNodeIsBST(node.left, minBound, node.val) && checkIfNodeIsBST(node.right, node.val, maxBound);
  }

  return checkIfNodeIsBST(root, -Infinity, Infinity);
};

export default isValidBST;