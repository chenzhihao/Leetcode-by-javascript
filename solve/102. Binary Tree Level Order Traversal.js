/*
 https://leetcode.com/problems/binary-tree-level-order-traversal/

 Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

 For example:
 Given binary tree [3,9,20,null,null,15,7],
 3
 / \
 9  20
 /  \
 15   7
 return its level order traversal as:
 [
 [3],
 [9,20],
 [15,7]
 ]

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
 * @return {number[][]}
 */

var levelOrder = function (root) {
  let currentLevel = [];
  let childLevel = [];
  let res = [];

  let currentLevelValList = [];
  currentLevel.push(root);

  while (currentLevel[0]) {
    currentLevelValList.push(currentLevel[0].val);

    if (currentLevel[0].left) {
      childLevel.push(currentLevel[0].left);
    }

    if (currentLevel[0].right) {
      childLevel.push(currentLevel[0].right);
    }

    currentLevel.shift();

    if (currentLevel[0] === undefined) {
      currentLevel = childLevel;
      childLevel = [];
      res.push(currentLevelValList);
      currentLevelValList = [];
    }
  }

  return res;
};

export default levelOrder;