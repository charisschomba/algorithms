class Node {
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.tail = null;
        this.head = null

    }
    push(val) {
       let newNode = new Node(val) 
       if(!this.head ) {
           this.head  = newNode;
           this.tail = this.head;
       } else {
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
    }
   pop() {
     if(!this.head) return undefined;
     let current = this.head;
     let newTail = current;
     while(current.next) {
         newTail = current;
         current = current.next;
     }
     this.tail = newTail;
     this.tail.next = null;
     this.length--;
     if(this.length === 0) {
         this.tail = null;
         this.head = null;
     }
     return current;
   }

   shift() {
       if(!this.head) return undefined;
       let prevHead = this.head;
       this.head = prevHead.next;
       this.length--;
       return prevHead;
   }
   unshift(val) {
         if(!this.head ) {
           this.head  = this.tail = new Node(val)
       }
       else {
       let prevHead = this.head;
       this.head = new Node(val);
       this.head.next = prevHead;
       }
       this.length++;
       return this.head;
   }
   get(index) {
       if(index < 0 || index >= this.length) return null;
       else {
           let counter = 0;
           let current = this.head;
           while(counter !== index) {
               current = current.next;
               counter++;
           }
           return current;
       }
   }
   set(index, val) {
       const node = this.get(index)
       if(node) {
           node.val = val;
       }
       console.log(node)

       return true
   }
   insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length)return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let prev = this.get(index-1);
        let newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
   }
   remove(index) {
       if(index < 0 || index >= this.length) return undefined;
       if(index === this.length-1) return this.pop()
      
       if(index === 0) return this.shift()
       let prev = this.get(index-1);
       let removed = prev.next;
       prev.next = removed.next;
       this.length--;
       return removed;

   }
   reverse() {
       let node = this.head;
       this.head = this.tail;
       this.tail = node;
       let next;
       let prev = null;
       for(let i = 0; i < this.length; i++) {
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
       }
       return this;
   }
   print() {
      let arr = [];
      let current = this.head;
      while(current){
          arr.push(current.val);
          current = current.next;
      } 
      console.log(arr);
   }
}

var list = new SinglyLinkedList(); 