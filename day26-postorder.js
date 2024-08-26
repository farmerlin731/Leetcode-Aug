//Important Concept:
//Oh.. [mid,right,left] -> reverse -> [left,right,mid] a.k.a PostOrder!

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorderByRecur = function (root) {
  const result = [];
  function helper(node) {
    if (!node) return;
    for (const child of node.children) {
      helper(child);
    }
    result.push(node.val);
  }
  helper(root);
  return result;
};

var postorderByIterative = function (root) {
  const result = [];
  let stack = [root];
  while (stack.length != 0) {
    const node = stack.pop();
    if (!node) continue;
    result.push(node.val);
    stack = [...stack, ...node.children];
  }
  return result.reverse();
};
