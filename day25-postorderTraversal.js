/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];
  while (stack.length !== 0) {
    const node = stack.at(-1);
    const left = node.left;

    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else {
      result.push(stack.pop().val);
    }
  }
  return result;
};

//Maybe the node has the same val
function iterativeWrongVer(root) {
  const stack = [root];
  const visited = new Set();
  const result = [];
  while (stack.length !== 0) {
    const tmpVal = stack.at(-1).val;
    // console.log("val", tmpVal);
    // console.log(visited);

    if (visited.has(tmpVal)) {
      result.push(tmpVal);
      stack.pop();
    } else {
      const tmpNode = stack.at(-1);
      visited.add(tmpNode.val);
      const left = tmpNode.left;
      const right = tmpNode.right;
      right && stack.push(right);
      left && stack.push(left);
    }
  }
  //   console.log(visited);
  return result;
}

function postOrderRecursion(root) {
  const result = [];
  function helper(node) {
    if (node == null) return;
    helper(node.left);
    helper(node.right);
    result.push(node.val);
  }
  helper(root);
  return result;
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function creatTreeA() {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  return node1;
}

const root = creatTreeA();
console.log(postorderTraversal(root));
