class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.size = 0;
    }
  
    peek() {
        //return last item
      return this.top;
    }
  
    push(value) {
      //if its empty top and bottom = new Node
      const myNode = new Node(value);
      if (this.size === 0) {
        this.top = myNode;
        this.bottom = myNode;
      } else {
        const temp = this.top;
        this.top = myNode;
        this.top.next = temp;
      }
      this.size++;
      return this;
    }
  
    pop() {
      //top.next becomes top
      const poppedData = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedData;
    }
  }
  
  const myStack = new Stack();
  myStack.push("first");
  myStack.push("second");
  myStack.push("third");
  console.log(myStack.pop());
  console.log(myStack);
  