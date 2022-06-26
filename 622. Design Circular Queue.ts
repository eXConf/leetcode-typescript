class MyCircularQueue {
  q: number[];
  max: number;
  constructor(k: number) {
    this.q = [];
    this.max = k;
  }

  enQueue(value: number): boolean {
    if (this.q.length === this.max) return false;
    this.q.unshift(value);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.q.pop();
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.q[this.q.length - 1];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.q[0];
  }

  isEmpty(): boolean {
    return this.q.length === 0;
  }

  isFull(): boolean {
    return this.q.length === this.max;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
