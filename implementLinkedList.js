class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }

  prepend(value) {
    const myNode = new Node(value);
    // set first item to new node's next item
    myNode.next = this.head;
    this.head = myNode;
    this.size++;
  }

  append(value) {
    //find the last element  , set its next to the new node, set new node next to null
    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }

    last.next = new Node(value);
    this.size++;
  }

  print() {
    const myArray = [];
    let current = this.head;
    while (current) {
      myArray.push(current.value);
      current = current.next;
    }
    return myArray;
  }

  insert(index, value) {
    let counter = 0;
    let previous = new Node();
    let current = this.head;
    // if (index <= this.size) {
    //   const myNode = new Node(value);
    //   this.head = myNode;
    // }

    if (index >= this.size) {
      throw Error("insert exceeed size");
    } else if (index === 0) {
      this.prepend(value);
    } else {
      //travserse to specified index  , set new node.next to that item , find prev item item, set its next to new Node

      while (counter !== index && current) {
        previous = current;
        current = current.next;
        counter++;
      }

      const myNode = new Node(value);
      myNode.next = current;
      previous.next = myNode;
    }
  }

  remove(index) {
    //traverse to index , set previous.next = current.next

    let counter = 0;
    let previous = new Node();
    let current = this.head;

    if (index === 0) {
      this.head = this.head.next;
    } else if (index >= this.size) {
      throw Error("boundary reached");
    } else {
      while (counter !== index && current) {
        previous = current;
        current = current.next;
        counter++;
      }

      previous.next = current.next;
    }
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first
  }
}

const myLInkedlist = new LinkedList(1);

myLInkedlist.prepend(2);
myLInkedlist.prepend(3);
// myLInkedlist.insert(0, 7);
// myLInkedlist.remove(0);
// myLInkedlist.insert(1, 8);
// myLInkedlist.reverse()

console.log(myLInkedlist.print());
