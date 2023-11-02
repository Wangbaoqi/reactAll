let counter = 0
let instance: Counter | null = null

class Counter {
  constructor() {
    if (instance) {
      console.error('You can only create one instance')
    }
    instance = this.getInstance()
  }
  getInstance() {
    return this
  }
  getCount() {
    return counter
  }
  increment() {
    return ++counter
  }
  decrement() {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter
