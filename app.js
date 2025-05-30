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
    // if (index <= this.size) {
    //   const myNode = new Node(value);
    //   this.head = myNode;
    // }

     if (index > this.size) {
      throw Error("insert exceeed size");
    }
    else{
          //travserse to specified index  , set new node.next to that item , find prev item item, set its next to new Node
    let counter = 0;
    let previous = null;
    let current = this.head;
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



  remove() {}
}

const myLInkedlist = new LinkedList(1);

myLInkedlist.prepend(2);
myLInkedlist.prepend(3);
myLInkedlist.insert(2, 7);

console.log(myLInkedlist.print());
