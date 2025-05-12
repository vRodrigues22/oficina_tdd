class Queue {
  constructor() {
    this.elements = []  
  }

  enqueue(item) {
    this.elements.push(item)
  }

  dequeue() {
    if (this.size() === 0) {
      return undefined  
    }
    return this.elements.shift()  
  }

  first() {
    return this.elements[0] 
  }
  size() {
    return this.elements.length 
  }
}

export default Queue