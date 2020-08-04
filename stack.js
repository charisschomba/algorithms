class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.last = null;
        this.first = null;
        this.size = 0;
    }
    push = (value) => {
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }
        return ++this.size

    }
    pop = () => {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last - null;
        }
        this.size--;
        this.first = this.first.next
        return temp.value
    }
};
stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.push(4))
console.log(stack.push(5))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)