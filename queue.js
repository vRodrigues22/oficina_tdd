class Queue {
  elements
  constructor(){
    this.elements = []
  }
  toEqual(Queue){
    if (this.size() !== Queue.size()) {
      return false
    }
    for (let i = 0; i < this.size(); i++) {
      if (this.elements[i] !== Queue.elements[i]) {
        return false
      }
    }
    return true
  }
  size(){
    return this.elements.length
  }
  enqueue(element){
    this.elements.push(element)
  }
  first(){
    return this.elements[0]
  }
  dequeue(){
    return this.elements.shift()
  }
  isEmpty(){
    return this.size() === 0
  }

}

export default Queue