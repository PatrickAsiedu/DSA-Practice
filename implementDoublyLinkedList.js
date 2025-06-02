class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }

  prepend(value) {
    const myNode = new Node(value);
    // set first item to new node's next item
    this.head.prev = myNode;
    myNode.next = this.head;
    myNode.prev = null;
    this.head = myNode;
    this.size++;
  }

  append(value) {
    //find the last element  , set its next to the new node, set new node next to null

    const myNode = new Node(value);

    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }

    myNode.prev = last;
    last.next = myNode;
    this.tail = myNode;

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
      myNode.prev = previous;
      current.prev = myNode;
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

      current.next.prev = previous;
      previous.next = current.next;
    }
  }
}

const myLInkedlist = new DoublyLinkedList(1);

myLInkedlist.append(5);
// myLInkedlist.prepend(2);
// myLInkedlist.prepend(3);
// myLInkedlist.insert(0, 7);
// myLInkedlist.remove(0);
myLInkedlist.insert(1, 8);

console.log(myLInkedlist);
// console.log(myLInkedlist.print());
