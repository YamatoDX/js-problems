/* Queue Starts*/
class Queue {
  constructor() {
    this.elements = [];
    this.length = 0;
  }
  enqueue(val) {
    this.elements.unshift(val);
    this.length += 1;
    return true;
  }
  dequeue(val) {
    const dElement = this.elements.pop();
    this.length -= 1;
    return dElement;
  }
}
/* Queue Ends */

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    let current = this.root;
    while (true) {
      if (current === val) {
        return false;
      }
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return true;
        }
        current = current.left;
        continue;
      }
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return true;
        }
        current = current.right;
        continue;
      }
    }
  }

  find(val) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val === current.val) {
        found = true;
        break;
      }
      if (val < current.val) {
        current = current.left;
        continue;
      }
      if (val > current.val) {
        current = current.right;
        continue;
      }
    }
    return found;
  }

  BFS() {
    if (!this.root) {
      return [];
    }
    let q = new Queue();
    q.enqueue(this.root);
    let visited = [];
    while (q.length > 0) {
      let dNode = q.dequeue();
      if (dNode.left) {
        q.enqueue(dNode.left);
      }
      if (dNode.right) {
        q.enqueue(dNode.right);
      }
      visited.push(dNode.val);
    }
    return visited;
  }

  DFSPreOrder() {
    // this can be used to reconstruct the BST
    if (!this.root) {
      return [];
    }
    let visited = [];

    function traverse(currentNode) {
      if (!currentNode) {
        return;
      }
      visited.push(currentNode.val);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    // returns array in increasing order
    if (!this.root) {
      return [];
    }
    let visited = [];
    function traverse(currentNode) {
      if (!currentNode) {
        return;
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      visited.push(currentNode.val);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    if (!this.root) {
      return [];
    }
    let visited = [];
    function traverse(currentNode) {
      if (!currentNode) {
        return;
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      visited.push(currentNode.val);
    }
    traverse(this.root);
    return visited;
  }

  // DFS Iterative Methods
  DFSPreOrderIterative() {
    if (!this.root) {
      return [];
    }
    let temp = [this.root];
    let visited = [];
    while (temp.length > 0) {
      const current = temp.pop();
      if (current.right) temp.push(current.right);
      if (current.left) temp.push(current.left);
      visited.push(current.val);
    }
    return visited;
  }

  DFSInOrderIterative() {
    if (!this.root) {
      return [];
    }
    let s = [];
    let finalResult = [];
    let current = this.root;
    while (s.length !== 0 || current) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        current = s.pop();
        finalResult.push(current.val);
        current = current.right;
      }
    }
    return finalResult;
  }

  DFSPostOrderIterative() {
    if (!this.root) {
      return [];
    }
    let s = [this.root];
    let finalResult = [];

    while (s.length !== 0) {
      let current = s.pop();
      finalResult.push(current.val);
      if (current.left) s.push(current.left);
      if (current.right) s.push(current.right);
    }
    return finalResult.reverse();
  }
}

const myBST = new BST();
const allInputs = [99, 11, 22, 33, 4, 55, 6, 100, 40, 75, 200];
allInputs.forEach((eachElement) => myBST.insert(eachElement));
console.log("input is", allInputs);
console.log("BFS is", myBST.BFS());
console.log("DFSPreOrder is", myBST.DFSPreOrder());
console.log("DFSPreOrderIterative is", myBST.DFSPreOrderIterative());
console.log("DFSPostOrder is", myBST.DFSPostOrder());
console.log("DFSPostOrderIterative is", myBST.DFSPostOrderIterative());
console.log("DFSInOrder is", myBST.DFSInOrder());
console.log("DFSInOrderIterative is", myBST.DFSInOrderIterative());

module.exports = {
  BST,
  BSTNode,
  Queue,
};
