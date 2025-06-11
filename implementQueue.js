class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    //return first item
    return this.first;
  }

  dequeue() {
    //remove first item
    //set first.next to be first and return removed first
    if (this.size === 0) {
      return;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }

  enqueue(value) {
    //add to last item
    const myNode = new Node(value);
    if (this.size === 0) {
      this.last = myNode;
      this.first = myNode;
    } else {
      //whatever was last should point to new Node
      this.last.next = myNode;
      this.last = myNode;
    }
    this.size++;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("First");
myQueue.enqueue("Second");
myQueue.enqueue("Third");
console.log(myQueue.dequeue());
console.log(myQueue);
