class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const myNode = new TreeNode(value);

    if (this.root === null) {
      this.root = myNode;
    } else {
      /*traverse tree  , if value < this.currentnode.value and current.left is empty , assign current.left = node ,
      if its not empty keep traversing
      */

      let current = this.root;
      while (current) {
        if (myNode.value < current.value) {
          if (!current.left) {
            current.left = myNode;
            return this;
          }
          current = current.left;
        } else if (myNode.value > current.value) {
          if (!current.right) {
            current.right = myNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    const myNode = new TreeNode(value);
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (myNode.value < current.value) {
        current = current.left;
      } else if (myNode.value > current.value) {
        current = current.right;
      } else if (myNode.value === current.value) {
        return current.value;
      }
    }
    return false;
  }

  remove(value) {
    let current = this.root;
    let parent;
    let lastturn;
    let child;
    if (!this.root) {
      return false;
    }
    //traverse to node
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
        lastturn = "left";
      } else if (value > current.value) {
        parent = current;
        current = current.right;
        lastturn = "right";
      } else if (value === current.value) {
        //node found now implement remove
        //if node has no children
        if (!current.left && !current.right) {
          if (lastturn === "left") {
            parent.left = null;
            return this;
          } else {
            parent.right = null;
            return this;
          }
        }
        //has only one child plug child into deleted spot
        else if (!current.left || !current.right) {
          //find child,  find node's parent ,
          if (current.left) {
            child = current.left;
          } else {
            child = current.right;
          }

          if (lastturn === "left") {
            parent.left = child;
            return this;
          } else {
            parent.right = child;
            return this;
          }
        }
        //has two children
        else {
          // visit the right child and keep travsersing to the left of subsequent children till the last child



          //if successor node has a right child
          //go to the right child, if it has no children, plug right child at that node and left child at left of the right child
          if (lastturn === "left") {
            current.right.left = current.left;
            parent.left = current.right;
            return this;
          } else {
            current.right.left = current.left;
            parent.right = current.right;
            return this;
          }
        }
      }
    }
  }

  toJSON() {
    return JSON.stringify(this.root, null, 2); // Pretty-print with 2-space indentation
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(15);
myTree.insert(70);
// myTree.insert(1);
// console.log(myTree.lookup(20));
myTree.remove(20);

console.log(myTree.toJSON());
