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
        //traverse tree  , if value < this.currentnode.value and current.left is empty , assign current.left = node ,
  
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
  }
  
  const myTree = new BinarySearchTree();
  myTree.insert(9);
  myTree.insert(4);
  myTree.insert(6);
  myTree.insert(20);
  myTree.insert(15);
  myTree.insert(170);
  myTree.insert(1);
  console.log(myTree.lookup(20));
  
  // console.log(myTree);
  