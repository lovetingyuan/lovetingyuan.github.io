class PriorityQueue {
  constructor(compareFn) {
    this.heap = []
    this.compare = compareFn || ((a, b) => a - b)
  }

  // 辅助函数：上浮操作，维护堆的有序性
  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
      ;[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      this.heapifyUp(parentIndex)
    }
  }

  // 辅助函数：下沉操作，维护堆的有序性
  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    let smallestIndex = index

    if (
      leftChildIndex < this.heap.length &&
      this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
    ) {
      smallestIndex = leftChildIndex
    }

    if (
      rightChildIndex < this.heap.length &&
      this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0
    ) {
      smallestIndex = rightChildIndex
    }

    if (smallestIndex !== index) {
      ;[this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]]
      this.heapifyDown(smallestIndex)
    }
  }

  // 添加元素到队列
  enqueue(element) {
    this.heap.push(element)
    this.heapifyUp(this.heap.length - 1)
  }

  // 移除并返回队列中优先级最高的元素
  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return root
  }

  // 返回队列中优先级最高的元素
  front() {
    if (this.isEmpty()) {
      return null
    }
    return this.heap[0]
  }

  // 判断队列是否为空
  isEmpty() {
    return this.heap.length === 0
  }

  // 返回队列中的元素个数
  size() {
    return this.heap.length
  }

  // 清空队列
  clear() {
    this.heap = []
  }
}

// 创建小根堆优先队列实例
const priorityQueueMin = new PriorityQueue()

// 添加元素到队列
priorityQueueMin.enqueue(3)
priorityQueueMin.enqueue(1)
priorityQueueMin.enqueue(2)

// 获取队列中优先级最高的元素
console.log(priorityQueueMin.front()) // 输出: 1

// 移除并返回队列中优先级最高的元素
console.log(priorityQueueMin.dequeue()) // 输出: 1

// 判断队列是否为空
console.log(priorityQueueMin.isEmpty()) // 输出: false

// 返回队列中的元素个数
console.log(priorityQueueMin.size()) // 输出: 2

// 清空队列
priorityQueueMin.clear()
console.log(priorityQueueMin.isEmpty()) // 输出: true

// // 创建大根堆优先队列实例
// const priorityQueueMax = new PriorityQueue((a, b) => b - a)

// // 添加元素到队列
// priorityQueueMax.enqueue(3)
// priorityQueueMax.enqueue(1)
// priorityQueueMax.enqueue(2)

// // 获取队列中优先级最高的元素
// console.log(priorityQueueMax.front()) // 输出: 3

// // 移除并返回队列中优先级最高的元素
// console.log(priorityQueueMax.dequeue()) // 输出: 3

// // 判断队列是否为空
// console.log(priorityQueueMax.isEmpty()) // 输出: false

// // 返回队列中的元素个数
// console.log(priorityQueueMax.size()) // 输出: 2

// // 清空队列
// priorityQueueMax.clear()
// console.log(priorityQueueMax.isEmpty()) // 输出: true
