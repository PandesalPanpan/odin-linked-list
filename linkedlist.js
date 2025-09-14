// Create a class called LinkedList that has many functions
import Node from "./node.js";
export default class LinkedList {
    linkedlistHead;
    linkedlistTail;
    /* 
        Method: append(value)
        Add a new node until it finds an undefined
    */
    append = (value) => {
        if (this.linkedlistHead == undefined) {
            this.linkedlistHead = new Node(value);
            return this.linkedlistHead;
        }
        // Find the tail node with the next null
        const currentTail = this.tail();
        currentTail.nextNode = new Node(value);
        
        // Return the created node
        return currentTail.nextNode;
    }


    /* 
        Method: prepend(value)
        Adds a new node at the beginning
    */
   prepend = (value) => {
        if (this.linkedlistHead == undefined) {
            this.linkedlistHead = new Node(value);
        }

        const newHead = new Node(value, this.linkedlistHead);

        this.linkedlistHead = newHead;
        return this.linkedlistHead;
   } 

    /* 
        Method: size()
        Returns the number total nodes
        iterate a count until it reaches the end
    */
   size = () => {
        if (!this.linkedlistHead instanceof Node) throw new Error(`Head is not an instance of node or is missing.`);
        
        // Start counting from the head until it reaches the tail the node with no next
        let count = 0;
        let currentNode = this.linkedlistHead;
        while (currentNode != null && currentNode instanceof Node) {
            currentNode = currentNode.nextNode;
            count++;
        }

        return count;
   }

    /* 
        Method: head();
    */


    /* 
        Method: tail();
    */
    tail = () => {
        if (!this.linkedlistHead instanceof Node) throw new Error(`Tail cannot be found without a proper head`);
        if (this.linkedlistTail instanceof Node && this.linkedlistTail.nextNode == null) return this.linkedlistTail;

        // Find the tail if it doesn't exist yet
        let currentNode = this.linkedlistTail ?? this.linkedlistHead;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }

        // Update/Set as tail
        this.linkedlistTail = currentNode;

        // Return the found tail
        return this.linkedlistTail;
    }


}
const linkedlist = new LinkedList();

linkedlist.append('node1');
linkedlist.prepend('node2');
linkedlist.append('node3');
console.log(linkedlist.size());
console.log(`Head: ${linkedlist.linkedlistHead.value}`);
console.log(`Tail: ${linkedlist.tail().value}`);